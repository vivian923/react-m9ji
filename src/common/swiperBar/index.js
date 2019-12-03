import ReactSwiper from 'reactjs-swiper';
import React,{ PureComponent } from 'react'
class ReactSwiperExample extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      swiperOptions: {
        preloadImages: true,
        autoplay:2000,
        showPagination: true,
        loop:true,
        autoplayDisableOnInteraction :false
      },
      items:[
          {
            "id": 1,
            "image": "https://img2.ch999img.com/newstatic/1382/013fc6836e361c8f.jpg.webp",
            "title": "图片1"
          },
          {
            "id":2,
            "image": " https://img2.ch999img.com/newstatic/1377/01440c012f964fa6.jpg.webp",
            "title":"图片2"
          },
          {
            "id":3,
            "image": " https://img2.ch999img.com/newstatic/1383/01440c0d6e79d635.jpg.webp",
            "title":"图片3"
          },
          {
            "id":4,
            "image": "https://img2.ch999img.com/newstatic/1377/01420e55da11a01b.jpg.webp",
            "title":"图片4"
          },
          {
            "id":5,
            "image": " https://img2.ch999img.com/newstatic/1380/01440c1717053436.jpg.webp",
            "title":"图片5"
          },
      ]
    }
  }
//   componentDidMount() {
//     axios.get('/api/navList.json').then( (response) => {
//       console.log(response.data.data);
//       this.setState({
//         items: response.data.data
//       })
//     }).catch(e => (console.log(e)))
//   }

  render() {
      let {swiperOptions}=this.state
      console.log(swiperOptions)
    return (
      <div className="swiper_box">
        <ReactSwiper options={swiperOptions}  showPagination items={this.state.items} className="swiper-example" ></ReactSwiper>
        <div className="swiper_ready" >
          {
            this.state.items.map((item) => {
              return(
                <div key={item.id}>
                  <img src={item.image} alt=""/>
                </div>
              )
              
            })
          }
        </div>
      </div>
    )
  }
}
 
export default ReactSwiperExample;