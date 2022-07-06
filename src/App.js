import logo from './logo.svg';
import './App.css';
// import './reponsive.css';

import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaFacebookMessenger } from "@react-icons/all-files/fa/FaFacebookMessenger";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaUserCheck } from "@react-icons/all-files/fa/FaUserCheck";
import { FaCrosshairs } from "@react-icons/all-files/fa/FaCrosshairs";
import { FaThumbsUp } from "@react-icons/all-files/fa/FaThumbsUp";
import { FaAddressCard } from "@react-icons/all-files/fa/FaAddressCard";


function App() {
  function defaultShowSelt() {
    var defaultShowSelt = document.getElementById("contentInfoSelt").style.display = "block";
  }
  function handleShowSelf() {
    var x = document.getElementById("contentInfoSelt").style.display = "block";
    if (x) {
      document.getElementById("Selt").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleShowResult() {

    var y = document.getElementById("contentInfoResult").style.display = "block";
    if (y) {
      document.getElementById("Result").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var x = document.getElementById("contentInfoSelt").style.display = "none";
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleShowTarget() {
    var z = document.getElementById("contentInfoTarget").style.display = "block";
    if (z) {
      document.getElementById("Target").style.background = "rgb(204 196 196)";
      document.getElementById("Interest").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var x = document.getElementById("contentInfoSelt").style.display = "none";
    var f = document.getElementById("contentInfoInterests").style.display = "none";
  }
  function handleshowInterest() {
    var f = document.getElementById("contentInfoInterests").style.display = "block";
    if (f) {
      document.getElementById("Interest").style.background = "rgb(204 196 196)";
      document.getElementById("Target").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Result").style.background = "rgba(255, 255, 255, 0.5)";
      document.getElementById("Selt").style.background = "rgba(255, 255, 255, 0.5)";
    }
    var z = document.getElementById("contentInfoTarget").style.display = "none";
    var y = document.getElementById("contentInfoResult").style.display = "none";
    var x = document.getElementById("contentInfoSelt").style.display = "none";
  }
  return (

    <div className='main'>

      <marquee>Chào Mừng Bạn Đến WebSite Của Tôi || Ngày Tạo 4/7/2022 </marquee>
      <div className='container'>
        <div className='row header'>
          <div className='header-left col l-6 m-12 c-12'>
            <div className='row'>
              <div className='header-avatar col l-4 m-4 c-12'>
                <img className='avatar' />
              </div>
              <div className='header-info col l-8 m-8 c-12'>
                <h1 className='name'>Nguyễn Khoa Trường</h1>
                <div className='description'>Chúa Hề</div>
                <div className='icon-contact'>
                  <div className='facebook'>
                    <a href='https://www.facebook.com/hkkoa.truong' target={'_blank'} className='facebook-info'>
                      <i className='icon-facebook'><FaFacebook /></i>
                    </a>
                  </div>
                  <div className='message'>
                    <a href='https://www.facebook.com/hkkoa.truong' target={'_blank'} className='message-info'>
                      <i className='icon-message'> <FaFacebookMessenger /></i>
                    </a>
                  </div>
                  <div className='twitter'>
                    <a href='https://twitter.com/khoa_trng' target={'_blank'} className='twitter-info'>
                      <i className='icon-twitter'><FaTwitter /></i>
                    </a>
                  </div>
                  <div className='github'>
                    <a href='https://github.com/NguyenKhoaTruong' target={'_blank'} className='github-info'>
                      <i className='icon-git'> <FaGithub /></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-right col l-6 m-12 c-12'>
            <div className='row'>
              <div className='header-right-info col l-6 m-6 c-12'>
                <h3>
                  EMAIL
                  <p>truongnk70@wru.vn</p>
                </h3>
                <h3>
                  NGÀY SINH
                  <p>23/11/1999</p>
                </h3>
              </div>
              <div className='header-right-info col l-6 m-6 c-12'>
                <h3>
                  SỐ ĐIỆN THOẠI
                  <p>0335138167</p>
                </h3>
                <h3>
                  QUÊ QUÁN
                  <p>Phú Hòa - Phú Yên</p>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='row containern'>
          <div className='container__selection-all col l-2 m-12 c-12 '>
            <div className='container__selection '>
              <div className='container__selection-item' onClick={handleShowSelf} id="Selt">
                <p className='contaier-selection-item-selt'>
                  <i className='icon-self'><FaAddressCard /></i>
                </p>
                <span className='title-selt'>Bản Thân</span>
              </div>
              <div className='container__selection-item' onClick={handleShowResult} id="Result">
                <p className='container-selection-item-result'>
                  <i className='icon-result'><FaUserCheck /></i>
                </p>
                <span className='title-result'>Kết Quả</span>
              </div>
              <div className='container__selection-item' onClick={handleShowTarget} id="Target">
                <p className='container-selection-item-target'>
                  <i className='icon-target'><FaCrosshairs /></i>
                </p>
                <span className='title-target'>Mục Tiêu</span>
              </div>
              <div className='container__selection-item' onClick={handleshowInterest} id="Interest">
                <p className='container-selection-item-interest'>
                  <i className='icon-interests'><FaThumbsUp /></i>
                </p>
                <span className='title-interest'>Sở Thích</span>
              </div>
            </div>
          </div>
          <div className='container__content-all col l-10 m-12 c-12' onLoad={defaultShowSelt}>
            <div className='container__content' id='contentInfoSelt'>
              <div className='container-content-info'>
                <div className='container-content-title'>
                  <h1>Giới Thiệu!</h1>
                </div>
                <div className='title-description'>
                  <br></br>
                  <p>Sinh Viên Trường Phân Hiệu Đại Học Thủy Lợi. Trong thời gian đợi nhận bằng tốt nghiệp.</p>
                  <p>Kiến thức học được trên lớp đều chưa áp dụng được mọi thành quả được học từ Internet.</p>
                  <p>Biết Sử Dụng ReactJS Component, NodeJS Express, MySQL, SQL Server, Javascript, Java, HTML, CSS, Boostrap Cơ Bản</p>
                  <p>Bảng Điểm Học Tập</p>
                  <img className='transcript' />
                </div>
              </div>
            </div>
            <div className='container__content' id='contentInfoResult'>
              <div className='container-content-info'>
                <div className='container-content-title'>
                  <h1>Một số Project của tôi!</h1>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-toeic' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ngôn ngữ:</h1>
                            <span>JavaScrip, HTML, CSS, Boostrap</span>
                          </div>
                          <div className='display-flex'>
                            <h1>Công cụ sử dụng:</h1>
                            <span> ReactJS: Class Component, Nodejs:Express, MySql <br></br>
                            </span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='' target="_blank"></a>
                          <a href='' target="_blank"> Source Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href=''></a>WebSite Luyện Thi Toeic</span>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-shopee' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ngôn ngữ:</h1>
                            <span>JavaScrip, HTML, CSS</span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='' target="_blank"></a>
                          <a href='' target="_blank"> Source Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href=''></a>Shopee Clone</span>
                </div>
                <div className='container-content-img col l-6 m-6 c-12'>
                  <div className='img-link'>
                    <div className='results-img'>
                      <a href=' ' target="_blank">
                        <img className='img-project-profile' />
                      </a>
                      <div className='results-img-hover'>
                        <a href='' target="_blank">
                          <div className='display-flex'>
                            <h1>Ngôn ngữ:</h1>
                            <span>JavaScrip, HTML, CSS</span>
                          </div>
                          <div className='display-flex'>
                            <h1>Thư Viện Framework:</h1>
                            <span>ReactJS</span>
                          </div>
                        </a>
                        <div className='source-code'>
                          <a href='' target="_blank"></a>
                          <a href='' target="_blank"> Source Code</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br></br>
                  <span className='name-website'><a href=''></a>Profile</span>
                </div>
              </div>
            </div>
            <div className='container__content' id='contentInfoTarget'>
              <div className='container-target'>
                <h1 className='title-target'>Mục Tiêu</h1>
                <h2 className='have-learned'>Học HTMl - CSS - Javascript cơ bản</h2>
                <h4 className='date-success-target'>5/11/2021(Hoàn thành)</h4>
                <p className='content-target'>
                  Là ngôn ngữ để bắt đầu bước vào con đường lập trình HTML và CSS có mối tương quan mật thiết.
                  HTML là nền tảng của site và CSS giúp định hình phong cách (tất cả những gì tạo nên giao diện website).
                  Hai yếu tố này hoàn toàn không thể tách rời. HTML đóng vai trò cung cấp cấu trúc nội dung và xác định nội dung đó.
                  Các nội dung này có thể kể đến như tiêu đề, đoạn văn hoặc hình ảnh.
                </p>
                <h2 className='have-learned' >Học sử dụng GIT và SASS Cơ Bản</h2>
                <h4 className='date-success-target'>6/12/2021(Hoàn thành)</h4>
                <p className='content-target'>
                  Hiện nay, Git trở thành một trong các phần mềm quản lý mã nguồn phổ biến nhất.
                  Việc biết sử dụng Git sẽ là lợi thế lớn với nhà tuyển dụng vì độ phổ biến và sự ứng dụng cao của nó.
                  Với SASS, bạn có thể viết CSS theo thứ tự rõ ràng, quản lý các biến đã được định nghĩa sẵn,
                  các class dùng chung hay có thể tự động nén tập tin CSS lại để bạn tiết kiệm dung lượng.
                </p>
                <h2 className='have-learned'>Học ReactJS: Hook và luyện tập Javascript</h2>
                <h4 className='date-success-target'>01/07/2022(Trong tiến trình)</h4>
                <p className='content-target'>
                  ReactJS là yêu cầu thiết yếu của các nhà tuyển dụng Front End, nhằm nâng cao và tối ưu hoá UI.
                  Đã sử dụng ReactJS: Component cho WebSite luyện thi Toiec.
                  Bên cạnh đó việc nâng khả năng Javascript càng quan trọng không kém, có khả năng viết tốt Javascript mới kết hợp được tất cả kiến thức tạo ra sự trơn tru mạch lạc.
                  Trong thời gian này bản thân sẽ cố gắng luyện code nhiều nhất có thể, một tuần sẽ cố gắng cho ra một sản phẩm hoàn chỉnh và sẽ được đưa vào CV.
                </p>
              </div>
            </div>
            <div className='container__content' id='contentInfoInterests'>
              <div className='container-interests'>
                <h1 className='title-interests'>Sở Thích</h1>
                <div className='interests-item'>
                  <img className='img-interests' src='https://cdn.tgdd.vn/2020/07/CookProduct/dsvsd-1200x676.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>Bánh Canh Hẹ</h1>
                    <p className='description-enjoy'>
                      Bánh canh hẹ Phú Yên là một đặc sản thơm ngon và nức tiếng của vùng đất này.
                      Nếu lỡ “sa” vào lưới tình với món ăn này nhưng chưa có dịp quay lại đây thì hôm nay hãy vào bếp cùng Bách hóa XANH để được
                      hướng dẫn cách nấu bánh canh hẹ Phú Yên đậm đà chuẩn bị dễ làm tại nhà.
                    </p>
                  </div>
                </div>
                <div className='interests-item'>
                  <img className='img-interests' src='https://cdn.vn.garenanow.com/web/lol-product/home/images/Lan_h3lpm3/06_2022/jinx-anima-squad-prestige-avatar.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>Liên Minh Huyền Thoại</h1>
                    <p className='description-enjoy'>
                      Liên Minh Huyền Thoại là một trò chơi video thể loại đấu trường trận chiến trực tuyến
                      nhiều người chơi được Riot Games phát triển và phát hành trên nền tảng Windows và MacOS,
                      lấy cảm hứng từ bản mod Defense of the Ancients cho trò chơi video Warcraft III: Frozen Throne.
                    </p>
                  </div>
                </div>
                <div className='interests-item'>
                  <img className='img-interests' src='https://24hsport.vn/webroot/img/images/giai-da-cau-tre-2017-3-1.jpg' />
                  <div className='interests-description'>
                    <h1 className='title-enjoy'>Đá Cầu</h1>
                    <p className='description-enjoy'>
                      Đá cầu là một môn thể thao thường được chơi nhiều ở Việt Nam và Trung Quốc,
                      trong đó người chơi tìm cách điều khiển một quả cầu ở trên không sao cho không bị rơi xuống đất bằng các bộ phận của cơ thể, trừ tay.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>

    //   </header>
    // </div>
  );
}

export default App;
