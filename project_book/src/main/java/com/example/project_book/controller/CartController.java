package com.example.project_book.controller;

import com.example.project_book.model.*;
import com.example.project_book.service.IUsersService;
import com.example.project_book.service.cart.ICartService;
import com.example.project_book.service.home.IHomeService;
import com.example.project_book.service.order.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private IHomeService homeService;

    @Autowired
    private IUsersService usersService;

    @Autowired
    private ICartService cartService;

    @ModelAttribute("cart")
    public Cart setupCart() {
        return new Cart();
    }


    @GetMapping("/add/{id}/{num}")
    public String addCart(@SessionAttribute Cart cart, @PathVariable int id, @PathVariable int num,
                          RedirectAttributes redirectAttributes,HttpServletRequest request) {
        Product product = homeService.getBookById(id);
        if (product == null) {
            return "";
        } else {
            redirectAttributes.addFlashAttribute("check", "add");
            cart.addItem(new Item(product, num));
            String email = request.getUserPrincipal().getName();
            User user = usersService.findByEmailUser(email);
            cartService.deleteCartByIdUser(user.getIdUser());
            for (int i = 0; i < cart.getItems().size(); i++) {
                CartOrder cartOrder = new CartOrder(cart.getItems().get(i).getProduct().getIdProduct(),
                        cart.getItems().get(i).getAmount(),user.getIdUser());
                cartService.updateCart(cartOrder);
            }
            return "redirect:/welcome/view-all";
        }
    }

    @GetMapping("/show-cart")
    public String showCart(@SessionAttribute Cart cart, Model model) {
        Cart cart1 = new Cart();
        for (int i = 0; i < cart.getItems().size(); i++) {
            Item item = new Item(homeService.getBookById(cart.getItems().get(i).getProduct().getIdProduct()), cart.getItems().get(i).getAmount());
            cart1.addItem(item);
        }
        model.addAttribute("cart", cart1);
        model.addAttribute("order", new Order());
        return "user/cart";
    }

//    @GetMapping("/plus/{id}")
//    public String plusQuantityItem(@PathVariable int id, @SessionAttribute Cart cart, Model model,
//                                   @ModelAttribute Order order, BindingResult bindingResult) {
//        Product product = homeService.getBookById(id);
//        Item item = new Item(product, 1);
//        cart.addItem(item);
//        model.addAttribute("cart", cart);
//        return "user/cart";
//
//    }

//    @GetMapping("/minus/{id}")
//    public String minusQuantityItem(@PathVariable int id, @SessionAttribute Cart cart, Model model,
//                                    @ModelAttribute Order order, BindingResult bindingResult) {
//        Product product = homeService.getBookById(id);
//        if (cart.getAmountById(id) == 0) {
////            cart.removeItem(id);
//        } else {
//            Item item = new Item(product, -1);
//            cart.addItem(item);
//        }
//        model.addAttribute("cart", cart);
//        return "user/cart";
//    }

    @GetMapping("/delete/{id}")
    public String deleteItem(@PathVariable int id, @SessionAttribute Cart cart, Model model) {
        cart.removeItem(id);
        model.addAttribute("cart", cart);

        model.addAttribute("order", new Order());
        return "user/cart";
    }
    @PostMapping("/delete")
    public String delete(@RequestParam("idDelete") int idDelete, @SessionAttribute Cart cart, Model model,
                         HttpServletRequest request) {
        cart.removeItem(idDelete);
        String email = request.getUserPrincipal().getName();
        User user = usersService.findByEmailUser(email);
        cartService.deleteCartByIdUser(user.getIdUser());
        for (int i = 0; i < cart.getItems().size(); i++) {
            CartOrder cartOrder = new CartOrder(cart.getItems().get(i).getProduct().getIdProduct(),
                    cart.getItems().get(i).getAmount(),user.getIdUser());
            cartService.updateCart(cartOrder);
        }
        model.addAttribute("cart", cart);
        model.addAttribute("order", new Order());
        return "user/cart";
    }

    //    Create: Huynh Duc
//    Day: 07/07/2023
    @PostMapping("/send")
    public String oderBook(@SessionAttribute Cart cart, @ModelAttribute Order order, Model model,
                           BindingResult bindingResult, HttpServletRequest request, RedirectAttributes redirectAttributes,
                           HttpSession session) {
        if (bindingResult.hasErrors()) {
            return "";
        }
        String str = "";
        Boolean flag = false;
        List<Item> list = cart.getItems();
        for (int i = 0; i <list.size(); i++) {
            if (list.get(i).getAmount()>homeService.getBookById(list.get(i).getProduct().getIdProduct()).getQuantityBooks()){
                str += list.get(i).getProduct().getNameProduct()+", ";
                flag = true;
            }
        }
        if (flag){
            String end = str.substring(0, str.length() - 2);
            redirectAttributes.addFlashAttribute("msg","number of book: "+end+" not enough");
            return "redirect:/cart/show-cart";
        }
        if (cart.getTotalMoney()==0){
            redirectAttributes.addFlashAttribute("msg","you haven't bought anything yet");
            return "redirect:/cart/show-cart";
        }
        for (int i = 0; i <list.size(); i++) {
            Product product = list.get(i).getProduct();
            product.setQuantityBooks(homeService.getBookById(list.get(i).getProduct().getIdProduct()).getQuantityBooks()-list.get(i).getAmount());
            homeService.update(product);
        }
        String email = request.getUserPrincipal().getName();
        User user = usersService.findByEmailUser(email);
//        cartService.deleteCartByIdUser(user.getIdUser());
        order.setDayOrder(LocalDate.now());
        order.setUser(user);
        order.setStatus(new Status(1, "chưa xử lý"));
        session.setAttribute("order",order);
//        cartService.oderBook(cart, order);
//        cart.clearCart();
//        model.addAttribute("user", user);
        return "redirect:/payment/create";

    }

    @PostMapping("/increase/{id}")
    @ResponseBody
    public void increaseQuantity(@RequestBody String productId, @PathVariable int id, @SessionAttribute Cart cart,
                                 HttpServletRequest request) {
        Product product = homeService.getBookById(id);
        Item item = new Item(product, 1);
        cart.addItem(item);
        String email = request.getUserPrincipal().getName();
        User user = usersService.findByEmailUser(email);
        cartService.deleteCartByIdUser(user.getIdUser());
        for (int i = 0; i < cart.getItems().size(); i++) {
            CartOrder cartOrder = new CartOrder(cart.getItems().get(i).getProduct().getIdProduct(),
                    cart.getItems().get(i).getAmount(),user.getIdUser());
            cartService.updateCart(cartOrder);
        }
    }

    @PostMapping("/decrease/{id}")
    @ResponseBody
    public void decreaseQuantity(@RequestBody String productId, @PathVariable int id, @SessionAttribute Cart cart,
                                 HttpServletRequest request) {
        Product product = homeService.getBookById(id);
        if (cart.getAmountById(id) == 0) {
        } else {
            Item item = new Item(product, -1);
            cart.addItem(item);
            String email = request.getUserPrincipal().getName();
            User user = usersService.findByEmailUser(email);
            cartService.deleteCartByIdUser(user.getIdUser());
            for (int i = 0; i < cart.getItems().size(); i++) {
                CartOrder cartOrder = new CartOrder(cart.getItems().get(i).getProduct().getIdProduct(),
                        cart.getItems().get(i).getAmount(),user.getIdUser());
                cartService.updateCart(cartOrder);
            }
        }

    }

    @PostMapping("/add-cart/{id}")
    @ResponseBody
    public void addCart(@RequestBody String productId, @PathVariable int id, @SessionAttribute Cart cart,
                        HttpServletRequest request) {
        Product product = homeService.getBookById(id);
        if (product == null) {
        } else {
            cart.addItem(new Item(product,1));
            String email = request.getUserPrincipal().getName();
            User user = usersService.findByEmailUser(email);
            cartService.deleteCartByIdUser(user.getIdUser());
            for (int i = 0; i < cart.getItems().size(); i++) {
                CartOrder cartOrder = new CartOrder(cart.getItems().get(i).getProduct().getIdProduct(),
                        cart.getItems().get(i).getAmount(),user.getIdUser());
                cartService.updateCart(cartOrder);
            }
        }
    }
}