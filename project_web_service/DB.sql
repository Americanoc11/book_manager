create database books_shop;
use books_shop;
CREATE TABLE `books_shop`.`role_user` (
  `id_role` INT NOT NULL AUTO_INCREMENT,
  `name_role` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_role`));
  CREATE TABLE `books_shop`.`users` (
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
CREATE TABLE `books_shop`.`type_product` (
  `id_type_product` INT NOT NULL AUTO_INCREMENT,
  `name_type_product` LONGTEXT NOT NULL,
  PRIMARY KEY (`id_type_product`));
  CREATE TABLE `books_shop`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(255) NOT NULL,
  `describe_book` LONGTEXT NULL,
  `img` LONGTEXT NOT NULL,
  `is_delete` BIT(1) NOT NULL,
  `name_product` VARCHAR(255) NOT NULL,
  `nation_book` VARCHAR(255) NOT NULL,
  `price_book` DOUBLE NOT NULL,
  `publication_year` VARCHAR(255) NOT NULL,
  `publishing_company` VARCHAR(255) NOT NULL,
  `quantity_books` INT NOT NULL,
  `id_type_product` INT NULL,
  PRIMARY KEY (`id_product`),
    FOREIGN KEY (`id_type_product`)REFERENCES `books_shop`.`type_product` (`id_type_product`));
    CREATE TABLE `books_shop`.`order_book` (
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
    CREATE TABLE `books_shop`.`order_detail` (
  `id_detail` INT NOT NULL AUTO_INCREMENT,
  `number_of_detail` INT NOT NULL,
  `order_id_order` INT NULL,
  `product_id_product` INT NULL,
  PRIMARY KEY (`id_detail`),
    FOREIGN KEY (`order_id_order`)
    REFERENCES `books_shop`.`order_book` (`id_order`),
    FOREIGN KEY (`product_id_product`)
    REFERENCES `books_shop`.`products` (`id_product`));
    
    INSERT INTO `books_shop`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('1', 'Business');
INSERT INTO `books_shop`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('2', 'Technology');
INSERT INTO `books_shop`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('3', 'Romantic');
INSERT INTO `books_shop`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('4', 'Adventure');
INSERT INTO `books_shop`.`type_product` (`id_type_product`, `name_type_product`) VALUES ('5', 'Fictional');

INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('1', ' Work Is Fun Press', 'This 6 x 9 inch (similar to A5) blank lined journal is a fun office notebook to lighten your day and give yourself a laugh / or to give as a gift to a coworker, work colleague, project team members, or your boss!. This 6 x 9 inch (similar to A5) blank lined journal is a fun office notebook to lighten your day and give yourself a laugh / or to give as a gift to a coworker, work colleague, project team members, or your boss!', 'https://m.media-amazon.com/images/I/41R9y7iiKlL._SX331_BO1,204,203,200_.jpg', 0, 'Work Notebook: Funny Office Notebook', 'France', '17', '2005', 'University of Chicago Press', '10', '1');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('2', 'Will Larson', 'Will Larson’s An Elegant Puzzle focuses on the particular challenges of engineering management—from sizing teams to handling technical debt to performing succession planning—and provides a path to the good solutions. Drawing from his experience at Digg, Uber, and Stripe, Larson has developed a thoughtful approach to engineering management for leaders of all levels at companies of all sizes. An Elegant Puzzle balances structured principles and human-centric thinking to help any leader create more effective and rewarding organizations for engineers to thrive in.', 'https://m.media-amazon.com/images/I/51074GAAmIL._SX336_BO1,204,203,200_.jpg', 0, 'An Elegant Puzzle: Systems of Engineering Management', 'US', '25', '2018', 'Avery', '10', '1');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('3', 'Gretchen Bakke', 'Cultural anthropologist Gretchen Bakke unveils the many facets of America energy infrastructure, its most dynamic moments and its most stable ones, and its essential role in personal and national life. The grid, she argues, is an essentially American artifact, one which developed with us: a product of bold expansion, the occasional foolhardy vision, some genius technologies, and constant improvisation. Most of all, her focus is on how Americans are changing the grid right now, sometimes with gumption and big dreams and sometimes with legislation or the brandishing of guns.', 'https://m.media-amazon.com/images/I/51b8IpF6erL._SX327_BO1,204,203,200_.jpg', 0, 'The Grid: The Fraying Wires Between Americans and Our Energy Future', 'US', '19', '2018', 'Bloomsbury USA', '14', '1');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('4', 'Darla-Jane Gilroy', 'Sophisticated, simple, and quintessentially British, Burberry is beloved for its remarkable ability to straddle tradition and innovation. The allure of the Burberry Girls, like Cara Delevingne, Kate Moss or Naomi Campbell, epitomizes just what Burberry is about: aspiration, elegance and grace.', 'https://m.media-amazon.com/images/I/31aV5eJFqzL._SX351_BO1,204,203,200_.jpg', 0, 'Little Book of Burberry: The Story of the Iconic Fashion House', 'US', '20', '2023', 'Welbeck Publishing', '10', '1');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('5', 'Oh Boy Love It', 'This thoughtfully designed guest book helps keep your guest messages and experiences organized in a handy book! Perfect for vacation rentals in nature settings, such as cabins, lake houses, log cabins, airbnb and bed and breakfasts. Great way to document your journey as a vacation rental owner.', 'https://m.media-amazon.com/images/I/51h8TP0VGeL._SX349_BO1,204,203,200_.jpg', 0, 'Welcome Guest Book: Bear in the Wilderness Design', 'US', '23', '2018', 'Avery', '14', '1');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('6', 'Lillian Rae Designs ', 'This Guest Book is a great way for your guests to leave you feedback, share their memories, experiences and leave recommendations and ideas for future guests. This guest book is perfect for vacation homes, cabins, lake houses, Airbnb bed & breakfasts and more! This rustic guest book would be a great addition to the experience for your guests and future guests!', 'https://m.media-amazon.com/images/I/51SrMOLKaaL._SY498_BO1,204,203,200_.jpg', 0, 'Atomic Habits', 'EU', '30', '2021', 'Avery', '14', '1');


INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('7', 'Alexandra Vasiliu', 'more love to yourself. To help you mend your heart’s wounds. To help you let go of your past. To help you overcome your insecurities. To help you win over your fears. To help you turn your tears into hope. To help you let your unique light shine out. To help you discover a new way of self-love. To help you appreciate your worth and inner beauty. To empower you to rise again and move on confidently.', 'https://m.media-amazon.com/images/I/31KgoFTB0xL._SX311_BO1,204,203,200_.jpg', 0, 'Healing Words: A Poetry Collection For Broken Hearts', 'US', '27', '2020', 'Avery', '15', '2');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('8', 'Jennae Cecelia', 'Best-selling poet of The Sun Will Rise and So Will We, Jennae Cecelia brings you her tenth poetry book about healing. In a time when the years have felt heavy and uncertain, Healing For No One But Me is meant to make you feel powerful and less alone in your thoughts, while also touching on the realities that happen in day-to-day life. Whether you have anxiety, depression, lost someone you love, went through a breakup, have hit a rough patch, or many rough patches, this book is a healing process. But remember it is your healing process.', 'https://m.media-amazon.com/images/I/51ZLFV0ZBwL._SX375_BO1,204,203,200_.jpg', 0, 'The Legend of Zelda™: Tears of the Kingdom – The Complete', 'US', '35', '2018', 'Piggyback', '14', '2');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('9', 'Poetry House', 'This great English Poetry Anthology contains 150 of the Most Famous Poems of the last centuries. Dating from the Middle Ages to the 20th century, these famous poems remain Masterpieces of English Literature and continue to inspire and influence people all over the world. This poetry compilation comes in the size of 8x10 inches (20.32 x 25.4 cm) and is perfect as a gift for poetry lovers, literature students and teachers or to complete your own book collection.', 'https://m.media-amazon.com/images/I/41LkeyR6V+L._SX398_BO1,204,203,200_.jpg', 0, '150 Most Famous Poems: Emily Dickinson, Robert Frost', 'US', '22', '2018', 'Avery', '14', '2');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('10', 'Mary Oliver', 'Carefully curated, these 200 plus poems feature Oliver work from her very first book of poetry, No Voyage and Other Poems, published in 1963 at the age of 28, through her most recent collection, Felicity, published in 2015. This timeless volume, arranged by Oliver herself, showcases the beloved poet at her edifying best. Within these pages, she provides us with an extraordinary and invaluable collection of her passionate, perceptive, and much-treasured observations of the natural world.', 'https://m.media-amazon.com/images/I/41sUCzwgt3L._SX324_BO1,204,203,200_.jpg', 0, 'Devotions: The Selected Poems of Mary Oliver', 'US', '18', '2018', 'Avery', '14', '2');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('11', 'Corey J. Ball', 'You’ll learn how REST and GraphQL APIs work in the wild and set up a streamlined API testing lab with Burp Suite and Postman. Then you’ll master tools useful for reconnaissance, endpoint analysis, and fuzzing, such as Kiterunner and OWASP Amass. Next, you’ll learn to perform common attacks, like those targeting an API’s authentication mechanisms and the injection vulnerabilities commonly found in web applications. You’ll also learn techniques for bypassing protections against these attacks', 'https://m.media-amazon.com/images/I/51qcGA4X8wL._SX377_BO1,204,203,200_.jpg', 0, 'Hacking APIs: Breaking Web Application Programming Interfaces', 'US', '20', '2018', 'No Starch Press', '14', '2');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('12', 'Kavita Ganesan', 'In this practical guide for business leaders, Kavita Ganesan takes the mystery out of implementing AI, showing you how to launch AI initiatives that get results. With real-world AI examples to spark your own ideas, you’ll learn how to identify high-impact AI opportunities, prepare for AI transitions, and measure your AI performance.', 'https://m.media-amazon.com/images/I/41nGuqei-JL._SX331_BO1,204,203,200_.jpg', 0, 'The Business Case for AI: A Leader Guide to AI Strategies', 'US', '24', '2022', 'Avery', '14', '2');


INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('13', 'Pam Godwin', 'They call me a slut. Maybe I am. Sometimes I do things I despise. Sometimes men take without asking. But I have a musical gift, only a year left of high school, and a plan. With one obstacle. Emeric Marceaux doesn’t just take. He seizes my will power and bangs it like a dark note. When he commands me to play, I want to give him everything. I kneel for his punishments, tremble for his touch, and risk it all for our stolen moments. He’s my obsession, my master, my music. And my teacher.', 'https://m.media-amazon.com/images/I/41fKV7oQhIS._SX331_BO1,204,203,200_.jpg', 0, 'Dark Notes', 'US', '31', '2016', 'Avery', '14', '3');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('14', 'Katee Robert', 'I’ve been harboring a dark secret for two long years. I’ve been fantasizing about my fiancé’s father, thinking filthy thoughts that a good daughter-in-law should not be indulging in. So when I catch my fiancé cheating on me, there’s only one revenge that will fulfill all my needs. I’m going to seduce his father. It’s dirty and it’s wrong, and I don’t care. I want him, so I mean to have him.After this weekend, my ex won’t be the only one who calls his father Daddy.', 'https://m.media-amazon.com/images/I/41vryPvqBOL.jpg', 0, 'Your Dad Will Do (A Touch of Taboo)', 'US', '45', '2020', 'Avery', '14', '3');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('15', 'Penelope Douglas', 'Sent to live with him and his two sons, Noah and Kaleb, in the mountains of Colorado, Tiernan soon learns that these men now have a say in what she chooses to care and not care about anymore. As the three of them take her under their wing, teach her to work and survive in the remote woods far away from the rest of the world, she slowly finds her place among them. And as a part of them. She also realizes that lines blur and rules become easy to break when no one else is watching. One of them has her. The other one wants her. But he…He’s going to keep her.*Credence is a full length, stand-alone romance suitable for readers 18+.', 'https://m.media-amazon.com/images/I/41Ax7qk8xkL._SX322_BO1,204,203,200_.jpg', 0, 'Credences', 'US', '18', '2020', 'Avery', '14', '3');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('16', 'Ana Huang', 'But despite her broken past, she never stopped seeing the beauty in the world...including the heart beneath the icy exterior of a man she shouldn want. Driven by a tragedy that has haunted him for most of his life, his ruthless pursuits for success and vengeance leave little room for matters of the heart.', 'https://m.media-amazon.com/images/I/4129wr8EF4L._SX322_BO1,204,203,200_.jpg', 0, 'Twisted Love (Twisted, 1)', 'US', '33', '2018', 'Bloom Books', '14', '3');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('17', 'Ana Huang', 'Vivian Lau, jewelry heiress and daughter of his newest enemy. The wife he never wanted, and the weakness he never saw coming. Vivian Lau, jewelry heiress and daughter of his newest enemy. The wife he never wanted, and the weakness he never saw coming. Vivian Lau, jewelry heiress and daughter of his newest enemy. The wife he never wanted, and the weakness he never saw coming.', 'https://m.media-amazon.com/images/I/410OhBeucgL._SX322_BO1,204,203,200_.jpg', 0, 'King of Wrath (Kings of Sin, 1)', 'US', '27', '2018', 'Bloom Books', '14', '3');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('18', 'Ana Huang', 'But when her brother abdicates, she suddenly faced with the prospect of a loveless, politically expedient marriage and a throne she never wanted. But when her brother abdicates, she suddenly faced with the prospect of a loveless, politically expedient marriage and a throne she never wanted.', 'https://m.media-amazon.com/images/I/41DUfYuuCfL._SX322_BO1,204,203,200_.jpg', 0, 'Twisted Games (Twisted, 2)', 'US', '35', '2018', 'Bloom Books', '14', '3');


INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('19', 'Julian Barnes', 'Julian Barnes playfully combines a detective story with a character study of its detective, embedded in a brilliant riff on literary genius. Julian Barnes playfully combines a detective story with a character study of its detective, embedded in a brilliant riff on literary genius. Julian Barnes playfully combines a detective story with a character study of its detective, embedded in a brilliant riff on literary genius.', 'https://m.media-amazon.com/images/I/51sYM0k7+-L.jpg', 0, 'Flaubert Parrot (Vintage International)', 'US', '26', '2011', 'Vintage', '14', '4');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('20', 'Julian Barnes', 'Siberia (or, more likely, shot dead on the spot), Shostakovich reflects on his predicament, his personal history, his parents, his daughter—all of those hanging in the balance of his fate. And though a stroke of luck prevents him from becoming yet another casualty of the Great Terror, he will twice more be swept up by the forces of despotism: coerced into praising the Soviet state at a cultural conference in New York in 1948, and finally bullied into joining the Party in 1960. All the while, he is compelled to constantly weigh the specter of power against the integrity of his music.', 'https://m.media-amazon.com/images/I/51itooDOQ7L.jpg', 0, 'The Noise of Time: A novel', 'US', '21', '2018', 'Vintage', '14', '4');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('21', 'Julian Barnes', 'In Elizabeth Finch, we are treated to everything we cherish in Barnes: his eye for the unorthodox forms love can take between two people, a compelling swerve into nonfictional material (this time, through Neil’s obsessive study of Julian the Apostate, following on notes Elizabeth left for him to discover after her death), and the forcefully moving undercurrent of history, and biography in particular, as nourishment and guide in our current lives.', 'https://m.media-amazon.com/images/I/51-M1rEsLJL.jpg', 0, 'Atomic Habits', 'US', '45', '2022', 'Vintage', '14', '4');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('22', 'Daniel Defoe', 'Moll Flanders, written by Daniel Defoe, is a classic novel that follows the life of an orphan as she navigates the complex world of 18th century England. Filled with adventure, tragedy, and romance, Moll Flanders is an unforgettable journey for readers of all ages. Through her struggles and triumphs, Moll Flanders teaches us valuable lessons about life, love, and resilience. This timeless classic is a must-read for fans of literature and historic fiction.', 'https://m.media-amazon.com/images/I/613Db-jpbdL._SX598_BO1,204,203,200_.jpg', 0, 'Moll Flanders', 'US', '15', '2020', 'Avery', '14', '4');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('23', 'Courtney Peppernell', 'Pillow Thoughts is a collection of poetry and prose about heartbreak, love, and raw emotions. It is divided into sections to read when you feel you need them most. Pillow Thoughts is a collection of poetry and prose about heartbreak, love, and raw emotions. It is divided into sections to read when you feel you need them most. Pillow Thoughts is a collection of poetry and prose about heartbreak, love, and raw emotions. It is divided into sections to read when you feel you need them most.', 'https://m.media-amazon.com/images/I/31nHkSwrgAL._SX311_BO1,204,203,200_.jpg', 0, 'Pillow Thoughts', 'US', '31', '2018', 'Avery', '14', '4');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('24', 'Julian Barnes', 'Basking in the glow of one another, they set up house together in London. Decades later, Paul looks back at how they fell in love and how—gradually, relentlessly—everything fell apart. As he turns over his only story in his mind, examining it from different vantage points, he finds himself confronted with the contradictions and slips of his own memory—and the ways in which our narratives and our lives shape one another. Poignant, vivid and profound, The Only Story is a searing novel of memory, devotion, and how first love fixes a life forever.', 'https://m.media-amazon.com/images/I/51fqR8z2ovL.jpg', 0, 'The Only Story: A novel', 'US', '27', '2018', 'Vintage', '14', '4');


INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('25', 'Julie McElwain', 'Mistaken for a lady maid hired to help with weekend guests, Kendra is forced to quickly adapt to the time period until she can figure out how she got there; and, more importantly, how to get back home. However, after the body of a young girl is found on the extensive grounds of the county estate, she starts to feel there some purpose to her bizarre circumstances. Stripped of her twenty-first century tools, Kendra must use her wits alone in order to unmask a cunning madman.', 'https://m.media-amazon.com/images/I/41cUwXo1KRL.jpg', 0, 'A Murder in Time: A Novel', 'US', '45', '2018', 'Pegasus Crime', '14', '5');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('26', 'Nicole Galland', 'The critically acclaimed author of The Fool Tale, Nicole Galland now approaches William Shakespeare classic drama of jealousy, betrayal, and murder from the opposite side. I, Iago is an ingenious, brilliantly crafted novel that allows one of literature greatest villains--the deceitful schemer Iago, from the Bard immortal tragedy, Othello--to take center stage in order to reveal his "true" motivations. This is Iago as you never known him, his past and influences breathtakingly illuminated, in a fictional reexamination that explores the eternal question: is true evil the result of nature versus nurture...or something even more complicated?', 'https://m.media-amazon.com/images/I/51-P0IbLcmL.jpg', 0, 'I, Iago: A Novel ', 'US', '45', '2018', 'William Morrow Paperbacks', '14', '5');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('27', 'Ernst Jünger', 'Through Venator, the prototypical anarch, Jünger offers a broad and uniquely insightful analysis of history from the post-historic perspective and, at the same time, presents a vision of future technological developments, including astonishingly prescient descriptions of today internet (the luminar), smartphone (the phonophore), and genetic engineering. At once a study of accommodation to tyranny and a libertarian vision of individual freedom, Eumeswil continues to speak to the contradictions and possibilities inherent in our twenty-first-century condition.', 'https://m.media-amazon.com/images/I/51-LSkSlM-L._SX331_BO1,204,203,200_.jpg', 0, 'Eumeswil', 'US', '45', '2015', 'Avery', '14', '5');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('28', 'Neal Stephens', 'When Melisande Stokes, an expert in linguistics and languages, accidently meets military intelligence operator Tristan Lyons in a hallway at Harvard University, it is the beginning of a chain of events that will alter their lives and human history itself. The young man from a shadowy government entity approaches Mel, a low-level faculty member, with an incredible offer. The only condition: she must sign a nondisclosure agreement in return for the rather large sum of money.', 'https://m.media-amazon.com/images/I/51D1iJ6ofuL.jpg', 0, 'The Rise and Fall of D.O.D.O.: A Novel', 'US', '39', '2018', 'William Morrow', '14', '5');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('29', 'Ken Liu', 'This mesmerizing collection features many of Ken’s award-winning and award-finalist stories, including: “The Man Who Ended History: A Documentary” (Finalist for the Hugo, Nebula, and Theodore Sturgeon Awards), “Mono No Aware” (Hugo Award winner), “The Waves” (Nebula Award finalist), “The Bookmaking Habits of Select Species” (Nebula and Sturgeon Award finalists), “All the Flavors” (Nebula Award finalist), “The Litigation Master and the Monkey King” (Nebula Award finalist), and the most awarded story in the genre’s history, “The Paper Menagerie” (The only story to win the Hugo, Nebula, and World Fantasy awards).', 'https://m.media-amazon.com/images/I/41zpDxpH6pL._SX331_BO1,204,203,200_.jpg', 0, 'The Paper Menagerie and Other Stories ', 'US', '45', '2016', 'Avery', '14', '5');
INSERT INTO `books_shop`.`products` (`id_product`, `author`, `describe_book`, `img`, `is_delete`, `name_product`, `nation_book`, `price_book`, `publication_year`, `publishing_company`, `quantity_books`, `id_type_product`) VALUES ('30', 'Mike Bockoven', 'Skyhorse Publishing, as well as our Arcade, Yucca, and Good Books imprints, are proud to publish a broad range of books for readers interested in fiction—novels, novellas, political and medical thrillers, comedy, satire, historical fiction, romance, erotic and love stories, mystery, classic literature, folklore and mythology, literary classics including Shakespeare, Dumas, Wilde, Cather, and much more. While not every title we publish becomes a New York Times bestseller or a national bestseller, we are committed to books on subjects that are sometimes overlooked and to authors whose work might not otherwise find a home.', 'https://m.media-amazon.com/images/I/51WQrCc-b-L.jpg', 0, 'FantasticLand: A Novel', 'US', '45', '2016', 'Skyhorse', '14', '5');


INSERT INTO `books_shop`.`role_user` (`id_role`, `name_role`) VALUES ('1', 'ADMIN');
INSERT INTO `books_shop`.`role_user` (`id_role`, `name_role`) VALUES ('2', 'USER');

INSERT INTO `books_shop`.`status_order` (`id_status`, `name_status`) VALUES ('1', 'Processing');
INSERT INTO `books_shop`.`status_order` (`id_status`, `name_status`) VALUES ('2', 'delivery');
INSERT INTO `books_shop`.`status_order` (`id_status`, `name_status`) VALUES ('3', 'delivered');
INSERT INTO `books_shop`.`status_order` (`id_status`, `name_status`) VALUES ('4', 'cancel order');
