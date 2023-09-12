import React, { useEffect, useState } from "react"
import * as homeService from "../service/HomeService"
import { NavLink, Link } from "react-router-dom";
export default function Home() {
    const [products, setProducts] = useState([]);
    const maxImgToShow = 4
    let countImg = 0;
    const display = async () => {
        try {
            const res = await homeService.getProductHome();
            setProducts(res)
            console.log(products);
        } catch (error) {
            console.log("Error display" + error.message);
        }
    }

    useEffect(() => {
        display()
    }, [])
    return (
        <>
            <div style={{ background: "rgb(243, 242, 236)" }}>

                <section id="billboard" >

                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="main-slider pattern-overlay">
                                    <div className="slider-item">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 banner-content">
                                                <h2 className="banner-title">Life of the Wild</h2>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero
                                                    ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis
                                                    urna, a eu.</p>
                                                <div className="btn-wrap">
                                                    <a href="#" className="btn btn-outline-accent btn-accent-arrow">Read More<i
                                                        className="icon icon-ns-arrow-right"></i></a>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <img src="images/main-banner1.jpg" alt="banner" className="banner-image" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="client-holder" data-aos="fade-up">
                    <div className="container">
                        <div className="row">
                            <div className="inner-content">
                                <div className="logo-wrap">
                                    <div className="grid">
                                        <a href="#"><img src="/images/client-image1.png" alt="client" /></a>
                                        <a href="#"><img src="/images/client-image2.png" alt="client" /></a>
                                        <a href="#"><img src="/images/client-image3.png" alt="client" /></a>
                                        <a href="#"><img src="/images/client-image4.png" alt="client" /></a>
                                        <a href="#"><img src="/images/client-image5.png" alt="client" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="featured-books">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="section-header " >
                                    <div className="title">
                                        <span>Some quality items</span>
                                    </div>
                                    <h2 className="section-title">Featured Books</h2>
                                </div>

                                <div className="product-list" data-aos="fade-up">
                                    <div className="row">
                                        {products && products.map((product) => {
                                            if (countImg < maxImgToShow) {
                                                countImg++;
                                                return (
                                                    <React.Fragment key={product.id} >
                                                        <div className="col-md-3" >
                                                            <div >
                                                                <figure className="product-style">
                                                                    <a style={{ textDecoration: "none" }}>
                                                                        <img src={product.img} alt="Books" className="product-item" />
                                                                    </a>
                                                                    <figcaption>
                                                                        <h3>{product.name}<a style={{ textDecoration: "none" }}></a></h3>
                                                                        <p>{product.author}</p>
                                                                        <div className="item-price" >${product.price}</div>
                                                                    </figcaption>
                                                                </figure>
                                                            </div>
                                                        </div>
                                                    </React.Fragment>
                                                )
                                            }


                                        })
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-md-12">

                                <div className="btn-wrap align-right">
                                    <a className="btn-accent-arrow">View all products <i className="icon icon-ns-arrow-right"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>
                </section >
                <section id="quotation" className="align-center" >
                    <div className="inner-content">
                        <h2 className="section-title divider">Quote of the day</h2>
                        <blockquote data-aos="fade-up">
                            <q>“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”</q>
                            <div className="author-name">Dr. Seuss</div>
                        </blockquote>
                    </div>
                </section>

            </div >


        </>
    )
}