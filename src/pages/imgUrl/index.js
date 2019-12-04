import React from "react"
import { Section } from "./styled"
import { ImagePicker, WingBlank } from 'antd-mobile';
import {changeImg} from "api/users"
import {withRouter} from "react-router-dom"
const data = [];
@withRouter
class ImgUrl extends React.Component {
  constructor() {
    super()
    this.state = {
      files: data,
      multiple:true,
      photoLogo:''
    }
  }
  render() {
    const { files } = this.state;
    return (
      <Section>
        <header>
          <div className="iconfont back" onClick={this.handleBack.bind(this)}>&#xe609;</div>
          <span>更换头像</span>
          <div className="management">
            <i className="iconfont">&#xe655;</i>
          </div>
        </header>
        <WingBlank>
          <ImagePicker
            files={files}
            onChange={this.onChange.bind(this)}
            onImageClick={(index, fs) => console.log(index, fs)}
            selectable={files.length < 7}
            multiple={this.state.multiple}
          />
        </WingBlank>
        <div className="loginbtn" onClick={this.handleModify.bind(this)}>修改</div>
      </Section>
    )
  }
 async onChange(files){
  let id=JSON.parse(sessionStorage.getItem("users")).id
  let photoLogo =files[0].url
    let data=await changeImg(id,photoLogo)
    this.setState({
      files,
      photoLogo:photoLogo,
      code:data.data.code
    });
    
  }
  handleModify(){
    if(this.state.code===1){
      alert("修改成功")
      sessionStorage.setItem("img",this.state.photoLogo)
      this.props.history.push("/mine")
    }
  }
  // onChange = (files) => {
  //   console.log(files)
  //   this.setState({
  //     files,
  //   });
  // }
  handleBack(){

  }
}

export default ImgUrl