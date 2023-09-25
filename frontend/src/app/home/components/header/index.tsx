import styles from "./index.module.css";
import search_icon from "/src/shared/assets/search-icon.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RecentSearch from "../recentSearch";
import { useEffect, useState } from "react";


function logo_svg () {
    //const fillcolor = this.props.icon_color;
    const fillcolor = [
        "#bebebe",
        "#dfdfdf",
        "#fff"
    ];
        
    return <svg width="36px" height="36px" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0.00 0.00 735.00 725.00">
                        <path fill={fillcolor[0]} d="
                            M 84.95 129.62
                            Q 98.52 113.38 107.69 104.18
                            Q 111.65 100.20 123.69 89.44
                            Q 155.12 61.33 191.04 42.54
                            C 201.76 36.93 214.97 32.69 225.06 28.24
                            C 232.09 25.14 239.06 21.80 246.28 19.56
                            Q 286.32 7.08 328.06 2.94
                            C 337.70 1.98 349.77 1.47 360.62 0.69
                            C 371.70 -0.11 383.13 1.55 394.25 2.02
                            Q 408.10 2.61 432.48 7.10
                            C 491.16 17.88 551.72 46.61 586.87 96.69
                            Q 607.59 126.21 619.27 159.73
                            C 634.89 204.55 631.06 251.47 605.99 291.75
                            C 596.76 306.58 585.57 320.54 572.37 331.98
                            C 534.90 364.46 484.09 385.38 435.92 361.07
                            C 419.02 352.53 407.40 342.36 394.05 330.89
                            C 391.72 328.89 389.96 326.21 388.08 324.18
                            C 359.12 292.93 337.52 256.56 314.43 221.06
                            C 280.10 168.30 227.26 115.11 159.74 113.00
                            C 157.58 112.93 155.39 111.29 152.98 112.28
                            Q 151.39 112.93 150.22 112.98
                            C 126.50 113.97 105.82 120.81 84.75 131.35
                            A 0.55 0.54 73.6 0 1 83.97 130.92
                            Q 83.89 130.26 84.43 130.02
                            Q 84.74 129.88 84.95 129.62
                            Z"
                        />
                        <path fill={fillcolor[1]} d="
                            M 735.00 393.07
                            L 735.00 394.56
                            Q 734.17 403.38 733.70 412.23
                            Q 729.17 497.63 690.05 573.36
                            C 689.70 574.04 688.91 574.72 688.50 575.49
                            Q 669.44 611.22 640.93 639.93
                            Q 608.15 672.95 565.38 690.40
                            C 533.44 703.43 495.28 708.39 465.08 705.69
                            C 433.50 702.87 402.15 692.14 377.80 671.33
                            C 349.06 646.76 329.01 610.25 320.39 573.70
                            C 318.45 565.47 317.71 556.32 316.77 547.59
                            Q 316.31 543.35 316.83 538.93
                            C 317.54 532.96 317.99 526.54 319.05 521.06
                            C 323.52 497.90 335.57 476.99 354.03 461.91
                            C 376.89 443.23 404.45 431.42 432.52 422.82
                            C 470.47 411.19 509.39 403.58 547.31 392.12
                            C 575.17 383.69 600.70 371.36 624.32 354.34
                            C 631.34 349.28 638.62 342.48 645.82 336.57
                            C 646.35 336.14 646.82 334.65 647.52 333.93
                            Q 675.42 305.15 681.78 266.18
                            C 684.36 250.38 683.89 231.99 684.06 215.22
                            A 0.41 0.41 0.0 0 1 684.82 215.01
                            C 711.33 260.29 729.08 311.98 733.07 364.50
                            C 733.80 374.03 734.03 383.59 735.00 393.07
                            Z"
                        />
                        <path fill={fillcolor[2]} d="
                            M 46.89 282.65
                            C 74.18 248.05 111.35 228.81 155.36 225.93
                            C 160.03 225.62 164.74 225.52 169.33 224.56
                            Q 170.49 224.32 171.66 224.59
                            C 175.86 225.58 180.64 225.60 184.95 225.80
                            C 213.75 227.16 241.67 234.25 265.24 251.42
                            C 279.42 261.76 290.15 275.98 296.90 292.01
                            Q 305.35 312.04 306.73 330.01
                            C 307.39 338.57 309.09 347.63 308.24 356.18
                            C 307.42 364.42 306.96 373.42 306.02 380.91
                            C 301.27 418.74 291.91 446.62 279.20 490.33
                            C 271.64 516.32 268.34 544.23 267.15 571.22
                            C 266.85 578.12 267.70 585.23 268.20 592.25
                            C 269.72 613.38 275.02 635.43 284.89 654.23
                            C 300.39 683.77 325.35 704.89 355.61 719.07
                            C 357.42 719.92 360.52 721.01 362.96 722.10
                            Q 363.71 722.44 362.93 722.68
                            Q 358.28 724.14 356.01 723.99
                            C 344.11 723.21 330.91 723.22 320.36 722.27
                            Q 220.08 713.23 140.02 654.23
                            Q 120.62 639.93 99.01 619.75
                            C 92.20 613.39 86.01 606.14 79.68 599.07
                            C 34.33 548.40 2.59 484.82 0.45 415.97
                            C 0.29 411.07 0.73 406.04 1.03 401.02
                            C 3.57 357.71 20.13 316.59 46.89 282.65
                            Z"
                    />
                </svg>
}

function post_svg (color="#FFF") {
   return <svg width="36px" height="36px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M20 2H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3v3.767L13.277 18H20c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 14h-7.277L9 18.233V16H4V4h16v12z"/>
        <path fill={color} d="m13.803 9.189-1.399-1.398-3.869 3.864v1.399h1.399zm.327-3.123 1.398 1.399-1.066 1.066-1.399-1.398z"/>
    </svg>
}

function formatQuery (texto) {
    // Remove acentos e converte para letras minúsculas
    const textoSemAcentos = texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")/*
        .toLowerCase()*/;
    
    // Remove espaços e caracteres especiais, deixando apenas letras, números e vírgulas
    const textoFormatado = textoSemAcentos
        .replace(/[^a-zA-Z0-9, ]+/g, "");
    
    return textoFormatado;
}

const Header = ({children}) => {
        const navigate = useNavigate();
        const queries = window.location.href.split("tags=")[1];
        let tags = '';
        if (queries != null)
            tags = window.location.href.split("tags=")[1];

        const [recentSearch, setRecents] = useState([] as string[]);
    
        const setValueWithDelay = (value) => {
            setTimeout(() => {
                setRecents(value);
            }, 300);
          };

        const onfocus = () => {
            const s_bar = document.getElementById("searchbar");
            if(!s_bar)
                return;
            
            s_bar.style.background = "#ffffff";
            s_bar.style.borderRadius = "50px";
        
            const storedSearches = localStorage.getItem("recentSearches");
            if(storedSearches != null){
                const temp1 = JSON.parse(storedSearches);
                console.log(temp1);
                //setRecents(temp1 as string[]);
                setValueWithDelay(temp1 as string[]);
            }
        }

        const search = (e) => {
            let el;

            if(e == null) {
                const s_bar = document.getElementById("searchbar");
                if(s_bar!=null)
                    el = (s_bar.childNodes[0] as HTMLInputElement);
            } else {
                if (!(e.key === 'Enter'))
                    return;
                el = e.target;
            }

            const query = formatQuery(el.value);
            const searching = query.split(",");

            let storedSearches = localStorage.getItem("recentSearches");
            console.log(storedSearches);

            if(storedSearches != null) {
                storedSearches = JSON.parse(storedSearches);
                localStorage.setItem("recentSearches", JSON.stringify(searching.concat(storedSearches)));
            } else {
                localStorage.setItem("recentSearches", JSON.stringify(searching));
            }


            if(query.length > 0 && query[0] != ',')
                navigate(`/search?tags=${query}`);
        }
           
        const clearBar = () => {
            const s_bar = document.getElementById("searchbar");
            if(!s_bar)
                return;
            (s_bar.childNodes[0] as HTMLInputElement).value = "";
            (s_bar.childNodes[1] as HTMLElement).style.display = "none";
            (s_bar.childNodes[2] as HTMLElement).style.display = "none";

            s_bar.style.background = "#ffffff7a";
            s_bar.style.borderRadius = "8px";
        }

        const onchange = (e)=>{

            const s_bar = document.getElementById("searchbar");
            if(!s_bar)
                return;

            const value = e.target.value;
            if(value.length == 0) {
                (s_bar.childNodes[1] as HTMLElement).style.display = "none";
                (s_bar.childNodes[2] as HTMLElement).style.display = "none";
            } else {
                (s_bar.childNodes[1] as HTMLElement).style.display = "block";
                (s_bar.childNodes[2] as HTMLElement).style.display = "block";
            }
                                
        }

        const onblur = (e) => {
            //setRecents([]);
            setValueWithDelay([])

            const s_bar = document.getElementById("searchbar");
            if(!s_bar)
                return; 

            const value = e.target.value;
            if(value.length == 0){
                s_bar.style.background = "#ffffff7a";
                s_bar.style.borderRadius = "8px";

                (s_bar.childNodes[1] as HTMLElement).style.display = "none";
                (s_bar.childNodes[2] as HTMLElement).style.display = "none";
            }
            else {
                s_bar.style.background = "#ffffffcf";
            }                        
        }

        return (
        <section className={styles.container}>
            <div className={styles.topbar}>
                <Link className={styles.header_title} to="/" replace>
                    {logo_svg()}
                    <span> Aniforum </span>
                </Link>

                <div className={styles.search_post}>
                    
                    <div className={styles.searchbar_container} id="searchbar">
                        <input type="text" className={styles.text_input} placeholder="pesquisar" onKeyDown={(e) => search(e)} defaultValue={tags} onFocus={onfocus} onChange={onchange} onBlur={onblur}/>
                        <button className={styles.search_button} onClick={()=>search(null)}>
                            <img src={search_icon} alt="SVG" width="16px" height="16px" style={{ marginTop: "-2px" }}/>
                        </button>
                        <button className={styles.clear_bar} onClick={()=>clearBar()}> ✖ </button>
                    </div>

                    {(recentSearch.length > 0) && <RecentSearch recents={recentSearch}/>}

                    <Link className={styles.post_button} to="/post/new_post" replace> {post_svg()} </Link>
                </div>
                
            </div>
            <div className={styles.children}>
                { children }
            </div>
        </section>
        );
    
}

export default Header;