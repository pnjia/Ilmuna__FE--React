import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "./DetailCourse.css";
import { faCertificate, faGraduationCap, faHourglass, faInfinity, faStar, faVideo } from "@fortawesome/free-solid-svg-icons";

export const DetailCourse = () => {
  return (
    <>
      <Navbar />
      <div className="detail__course__hero">
        <div className="detail__course__background"></div>
        <div className="detail__course__content">
          <div className="detail__course__title">
            <h2>Judul course</h2>
            <h4>Menjelaskan apa yang akan didapat dalam course ini lorem*20</h4>
          </div>
          <div className="detail__course__video">
            <video id='video' controls="controls" preload='none' width="100%" poster="https://assets.codepen.io/32795/poster.png">
              <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
              <source id='webm' src="http://media.w3.org/2010/05/sintel/trailer.webm" type='video/webm' />
              <source id='ogv' src="http://media.w3.org/2010/05/sintel/trailer.ogv" type='video/ogg' />

    
            </video>
          </div>
          <div className="detail__course__buy">
            <div className="benefit">
              <div>
                <FontAwesomeIcon icon={faCertificate} style={{color: "var(--quartenary-color)", fontSize: "60px"}} />
                <p>Sertifikat</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faGraduationCap} style={{color: "var(--quartenary-color)", fontSize: "60px"}} />
                <p>Siswa</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faInfinity} style={{color: "var(--quartenary-color)", fontSize: "60px"}} />
                <p>Unlimited Access</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faVideo} style={{color: "var(--quartenary-color)", fontSize: "60px"}} />
                <p>999 Video</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faHourglass} style={{color: "var(--quartenary-color)", fontSize: "60px"}} />
                <p>99 Jam 99 menit</p>
              </div>
            </div>
            <div className="rating__and__category">
              <div className="rating">
                <p>Rating</p>
                <div className="star">
                  <FontAwesomeIcon icon={faStar} style={{color: "#FFD43B", fontSize: "25px"}} />
                  <p>4.9</p>
                </div>
              </div>
              <div className="category">
                <p>Kategori</p>
                <p>Keagamaan</p>
              </div>
            </div>
            <div className="price">
              <h1>Rp 999.999</h1>
            </div>
            <div className="btn__buy">
              <button>Beli kelas</button>
            </div>
          </div>
          <div className="detail__course__description">
            <div className="btn__description__section">
              <div className="btns">
                <button>Detail</button>
                <button>Kurikulum</button>
                <button>Ustadz</button>
                <button>Ulasan</button>
              </div>
            </div>
            <div className="detail__description__section">
              <h2>Tentang kelas</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque
                illo et rem minima inventore voluptate amet excepturi incidunt a
                molestiae adipisci nulla labore nostrum maiores, modi eius iste
                harum eum! Dolorem, in. Esse perferendis fugiat eius quaerat ab
                temporibus inventore alias, exercitationem necessitatibus
                consequatur enim ipsam maxime quod dignissimos eum quam quasi
                accusantium rem modi placeat adipisci. Est, obcaecati mollitia.
                Voluptatibus labore doloremque consectetur praesentium.
                Voluptate rem quo non cum error! Quod tempora maiores sint
                dolorum debitis, quo sed molestias mollitia est consectetur id
                iusto numquam. Vero enim a voluptatem. Reprehenderit earum unde
                necessitatibus ipsa, obcaecati incidunt, modi et magnam
                dignissimos eligendi harum repellendus, consequuntur iste dolor!
                Reprehenderit numquam voluptatibus ad, velit saepe accusantium
                id mollitia incidunt quaerat. Totam, illum. Doloremque molestiae
                modi culpa minus, facilis tenetur velit maxime temporibus
                repudiandae asperiores pariatur vero quae ullam vitae iste
                suscipit eveniet omnis illo voluptate exercitationem perferendis
                nobis, soluta labore iusto. Quos. Pariatur deleniti quia nam
                ducimus architecto reiciendis at molestiae illo vero sit iusto
                perspiciatis obcaecati veniam sequi quibusdam ullam, quod in
                voluptatibus. Nobis nesciunt dolore nemo odit alias doloremque
                exercitationem! Saepe deleniti repellendus, totam eveniet
                possimus odit molestias! Quibusdam aperiam, ullam velit deleniti
                delectus illo doloremque ipsum iste magnam recusandae rerum,
                eligendi fugit accusamus ex totam voluptatem quia, maxime
                consequuntur? Tempora architecto impedit repellat quas minima
                alias non est officia laudantium eligendi placeat maxime iste
                voluptatem aspernatur fugiat iusto laborum, ab aliquid quasi
                unde, aut fuga esse itaque? Id, minima!
              </p>
            </div>
            <div className="kurikulum__description__section"></div>
            <div className="ustadz__description__section"></div>
            <div className="ulasan__description__section"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
