CREATE TABLE `coffee_house`.`role_user` (
  `id_role` INT NOT NULL AUTO_INCREMENT,
  `name_role` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_role`));
  CREATE TABLE `coffee_house`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `birth_of_day` VARCHAR(255) NOT NULL,
  `email_user` LONGTEXT NOT NULL,
  `gender_user` BIT(1) ,
  `is_delete` BIT(1) NOT NULL,
  `pass_user` LONGTEXT NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `id_role` INT NULL,
  PRIMARY KEY (`id_user`),
    FOREIGN KEY (`id_role`) REFERENCES `books_shop`.`role_user` (`id_role`));
    CREATE TABLE `books_shop`.`status_order` (
  `id_status` INT NOT NULL AUTO_INCREMENT,
  `name_status` VARCHAR(255) NULL,
  PRIMARY KEY (`id_status`));
CREATE TABLE `coffee_house`.`type_product` (
  `id_type_product` INT NOT NULL AUTO_INCREMENT,
  `name_type_product` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_type_product`));
  CREATE TABLE `coffee_house`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `describe_product` LONGTEXT NULL,
  `img` LONGTEXT NOT NULL,
  `is_delete` BIT(1) NOT NULL,
  `nation_book` VARCHAR(255) NOT NULL,
  `price_book` DOUBLE NOT NULL,
  `id_type_product` INT NULL,
  PRIMARY KEY (`id_product`),
    FOREIGN KEY (`id_type_product`)REFERENCES `coffee_house`.`type_product` (`id_type_product`));
    CREATE TABLE `coffee_house`.`order_coffee` (
  `id_order` INT NOT NULL AUTO_INCREMENT,
  `address_people` LONGTEXT NOT NULL,
  `day_order` DATE NOT NULL,
  `day_take` DATE NULL,
  `flag_delete` BIT(1) NOT NULL,
  `note_order` LONGTEXT NULL,
  `status_id_status` INT NULL,
  `user_id_user` INT NULL,
  PRIMARY KEY (`id_order`),
    FOREIGN KEY (`status_id_status`)
    REFERENCES `books_shop`.`status_order` (`id_status`),
    FOREIGN KEY (`user_id_user`)
    REFERENCES `books_shop`.`users` (`id_user`));