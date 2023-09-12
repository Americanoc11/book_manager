package com.example.book_management.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
//    @Autowired
//    private DataSource dataSource;
//    @Autowired
//    private CustomUserDetailsService userDetailsService;

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        return bCryptPasswordEncoder;
    }

    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        InMemoryTokenRepositoryImpl memory = new InMemoryTokenRepositoryImpl();
        return memory;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .authorizeRequests()
                .antMatchers("/", "/shop", "/register", "/home/*", "/products/**", "/public/users/login", "/public/users/save")
                .permitAll().and().csrf().disable(); // Cho phép truy cập tất cả các URL

        http
                .authorizeRequests()
                .antMatchers("/cart/show-cart")
                .access("hasAnyRole('ROLE_USER', 'ROLE_ADMIN')");
//        http
//                .authorizeRequests()
//                .antMatchers( )
//                .access("hasRole('ROLE_ADMIN')");
        http
                .authorizeRequests()
                .and().formLogin()//
                // Submit URL của trang login
                .loginPage("/login")//
                .defaultSuccessUrl("/")//
                // Cấu hình cho Logout Page.
                .and()
                .logout()
                .logoutUrl("/welcome/logout")
                .logoutSuccessUrl("/welcome/login?logout");

    }
//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.userDetailsService(userDetailsService).passwordEncoder(passwordEncoder());
//    }
}
