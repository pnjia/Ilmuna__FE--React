import { Footer } from "../../components/Footer/Footer";
import { Navbar } from "../../components/Navbar/Navbar";
import "./DetailCourse.css";

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
          <div className="detail__course__video"></div>
          <div className="detail__course__buy">
            <div className="benefit">
              <div>
                <svg
                  viewBox="0 0 24 24"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>certificate_line</title>{" "}
                    <g
                      id="页面-1"
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      {" "}
                      <g
                        id="Education"
                        transform="translate(-864.000000, 0.000000)"
                        fill-rule="nonzero"
                      >
                        {" "}
                        <g
                          id="certificate_line"
                          transform="translate(864.000000, 0.000000)"
                        >
                          {" "}
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M18,10 C20.2091,10 22,11.7909 22,14 C22,15.0144 21.6224,15.9407 21,16.6458 L21,20.8382 C21,21.6559 20.1395,22.1878 19.4081,21.8221 L18,21.118 L16.5919,21.8221 C15.8605,22.1878 15,21.6559 15,20.8382 L15,16.6458 C14.3776,15.9407 14,15.0144 14,14 C14,11.7909 15.7909,10 18,10 Z M20,4 C21.1046,4 22,4.89543 22,6 L22,8 C22,8.55228 21.5523,9 21,9 C20.4477,9 20,8.55228 20,8 L20,6 L4,6 L4,18 L12,18 C12.5523,18 13,18.4477 13,19 C13,19.5523 12.5523,20 12,20 L4,20 C2.89543,20 2,19.1046 2,18 L2,6 C2,4.89543 2.89543,4 4,4 L20,4 Z M19,17.874 C18.6804,17.9562 18.3453,18 18,18 C17.6547,18 17.3196,17.9562 17,17.874 L17,19.382 L17.5528,19.1056 C17.8343,18.9648 18.1657,18.9648 18.4472,19.1056 L19,19.382 L19,17.874 Z M18,12 C16.8954,12 16,12.8954 16,14 C16,15.1046 16.8954,16 18,16 C19.1046,16 20,15.1046 20,14 C20,12.8954 19.1046,12 18,12 Z M9,13 C9.55228,13 10,13.4477 10,14 C10,14.51285 9.61395571,14.9355092 9.11662025,14.9932725 L9,15 L7,15 C6.44772,15 6,14.5523 6,14 C6,13.48715 6.38604429,13.0644908 6.88337975,13.0067275 L7,13 L9,13 Z M13,9 C13.5523,9 14,9.44772 14,10 C14,10.5523 13.5523,11 13,11 L7,11 C6.44772,11 6,10.5523 6,10 C6,9.44772 6.44772,9 7,9 L13,9 Z"
                            id="形状"
                            fill="#09244B"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                <p>Sertifikat</p>
              </div>
            </div>
            <div className="rating__and__category"></div>
            <div className="price"></div>
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
