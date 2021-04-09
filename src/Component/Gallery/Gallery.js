import React from 'react'

function Gallery() {
    return (
        <React.Fragment>
            
            <div class="gallery">
        <div class="gallery__container">
            <div class="grid-sizer"></div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/Gallery/shipping1.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/Gallery/shipping1.jpg"} class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping2.jpg"}>
                <a href="img/gallery/gallery-2.jpg" class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping3.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping3.jpg"}class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item gc__item__large set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping4.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping4.jpg"} class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping5.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping5.jpg"} class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping6.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping6.jpg"}class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            <div class="gc__item set-bg" data-setbg={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping7.jpg"}>
                <a href={process.env.PUBLIC_URL+"/Assets/img/gallery/shipping7.jpg"} class="image-popup"><i class="fa fa-search-plus"></i></a>
            </div>
            
        </div>
    </div> 
    
    </React.Fragment>
    )
}

export default Gallery
