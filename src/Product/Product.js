import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./Product.css";
import logo from "../image/logo24h.png"
import gameoff1 from "../image/gameoff1.jpg"
import gameoff2 from "../image/gameoff2.jpg"
import gameoff3 from "../image/gameoff3.jpg"
import gameonl1 from "../image/gameonl1.jpg"
import gameonl2 from "../image/gameonl2.jpg"
import gameonl3 from "../image/gameonl3.jpg"
import gameduaxe1 from "../image/duaxe1.jpg"
import gameduaxe2 from "../image/duaxe2.jpg"
import gameduaxe3 from "../image/duaxe3.jpg"
import gamenauan1 from "../image/nauan1.jpg"
import gamenauan2 from "../image/nauan2.jpg"
import gamenauan3 from "../image/nauan3.jpg"
import gamezomebie1 from "../image/zombie1.jpg"
import gamezomebie2 from "../image/zomebie2.jpg"
import gamezomebie3 from "../image/zombie3.jpg"
import gamebansung1 from "../image/bansung1.jpg"
import gamebansung2 from "../image/bansung2.jpg"
import gamebansung3 from "../image/bansung3.jpg"
import { Link } from "react-router-dom";


export default function Product() {
    var Datacatego = [];
    var Datagameonline = [];
    var Datagameoff = [];
    var Datagamebansung = [];
    var Datagameduaxe = [];
    var Datagamezombie = [];
    var Datagamenauan = [];

    function datacatego(category, data) {
        this.category = category;
        this.data = data
    }

    function datagameoff(name, img) {
        this.name = name;
        this.img = img;
    }

    function datagameonline(name, img) {
        this.name = name;
        this.img = img;
    }

    function datagameduaxe(name, img) {
        this.name = name;
        this.img = img;
    }

    function datagamezombie(name, img) {
        this.name = name;
        this.img = img;
    }

    function datagamenauan(name, img) {
        this.name = name;
        this.img = img;
    }

    function datagamebansung(name, img) {
        this.name = name;
        this.img = img;
    }


    var Playzomebie = new datagameoff("Play zombie", gameoff1);
    var Sekiro = new datagameoff("SEKIRO", gameoff2);
    var TheWalkingdead = new datagameoff("The Walking dead", gameoff3);

    var Playsieunhan = new datagamebansung("Play bắn nhau", gamebansung1);
    var Playkhuvuon = new datagamebansung("play bắn Khu vuon", gamebansung2);
    var Playnongtrai = new datagamebansung(" play bắn cho mùi Nông trại", gamebansung3);

    var Duaxethethao = new datagameduaxe("Đua xe thể thao", gameduaxe1);
    var Duaxetuyet = new datagameduaxe("Đua xe tuyết", gameduaxe2);
    var Duaxebang = new datagameduaxe("Đua xe băng", gameduaxe3);

    var Pubgmobie = new datagameonline("PUBG mobie", gameonl1);
    var Lienquan = new datagameonline("Liên quân", gameonl2);
    var Idlegog = new datagameonline("IDLE GOG", gameonl3);

    var Zomebiehoaqua = new datagamezombie("Zomebie hoa quả", gamezomebie1);
    var Zomebitrumcuoi = new datagamezombie("Zomebie trùm cuối", gamezomebie2);
    var Zomebiemuihe = new datagamezombie("Zomebie mùi hà", gamezomebie3);

    var Nauanchomui = new datagamenauan("Nấu ăn cho mùi", gamenauan1);
    var Nauanchobe = new datagamenauan("Nấu ăn cho bé", gamenauan2);
    var Nauanchome = new datagamenauan("Nấu ăn cho me", gamenauan3);



    var Gameonline = new datacatego("game online", Datagameonline);
    var Gameoffline = new datacatego("game offline", Datagameoff);
    var Gamebansung = new datacatego("game bắn súng", Datagamebansung);
    var Gameduaxe = new datacatego("game đua xe", Datagameduaxe);
    var Gamezombie = new datacatego("game zombie", Datagamezombie);
    var Gamenauan = new datacatego("game nấu ăn", Datagamenauan);



    Datacatego.push(Gameonline);
    Datacatego.push(Gameoffline);
    Datacatego.push(Gamebansung);
    Datacatego.push(Gameduaxe);
    Datacatego.push(Gamezombie);
    Datacatego.push(Gamenauan);

    // Dataproducts.push(Gameoff)

    Datagameoff.push(Playzomebie);
    Datagameoff.push(Sekiro);
    Datagameoff.push(TheWalkingdead);

    Datagameonline.push(Pubgmobie);
    Datagameonline.push(Lienquan);
    Datagameonline.push(Idlegog);

    Datagameduaxe.push(Duaxethethao);
    Datagameduaxe.push(Duaxetuyet);
    Datagameduaxe.push(Duaxebang);

    Datagamezombie.push(Zomebiehoaqua);
    Datagamezombie.push(Zomebiemuihe);
    Datagamezombie.push(Zomebitrumcuoi);

    Datagamenauan.push(Nauanchobe);
    Datagamenauan.push(Nauanchome);
    Datagamenauan.push(Nauanchomui);

    Datagamebansung.push(Playsieunhan);
    Datagamebansung.push(Playkhuvuon);
    Datagamebansung.push(Playnongtrai);

    const [datagame, setdatagame] = useState(Datagameoff);
    return (
        <>
            <header>
                <div className="inner-header">
                    <img src={logo} />
                    <nav>
                        <ul id="main-menu">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Sản phẩm</a></li>
                            <li><a href="#">Giới thiệu</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div className="wrapper">
                <div className="catago">
                    <p className="nav">Danh mục</p>
                    <div className="is-driver"></div>
                    <nav className="mr-1000" >
                        {Datacatego.map((item, index) =>

                            <ul className="namecatago" key={index}>
                                {
                                    <li><p onClick={() => { setdatagame(item.data) }}>{item.category}</p></li>
                                }
                            </ul>
                        )}
                    </nav>
                </div>

                <div className="products">
                    {datagame.map((item, index) => (
                        <div className="product" key={index}>
                            <div className="product-img">
                                <img src={item.img} />
                            </div>
                            <div className="nameproduct1">
                                <p><Link to="https://gamevui.vn
                                    /plants-vs-zombies/game" >{item.name}</Link></p>
                            </div>
                        </div>
                    ))};
                </div>
            </div>



            <footer>
                <div className="row">
                    <div className="boxcenter1">
                        <div className="boxfooter1 colors">
                            <h4>Dia chi</h4>
                            <div>Co so I:20 ngo 16 van phu phu la ha dong</div>
                            <div>Co so II:20 ngo 17 van van quan ha dong</div>
                        </div>
                        <div className="boxfooter2 colors">
                            <h4>Huong dan</h4>
                            <div>Huong dan dang ky</div>
                            <div>Huong dan dang nhap</div>
                        </div>
                        <div className="boxfooter3 colors">
                            <h4>Contact me</h4>
                            <div>Noi dung chinh cua web</div>
                        </div>

                    </div>

                </div>
            </footer>
        </>

    )

}