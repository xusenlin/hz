import React from "react";
import "./style.scss";

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      content: "",
      title: ""
    };
  }

  openPopup(title, content) {
    this.setState({
      open: true,
      title: title,
      content: content
    });
  }
  closePopup() {
    this.setState({ open: false });
  }

  render() {
    return (
      this.state.open && (
        <div className="mask">
          <div className="popup">
            <div className="title">{this.state.title}</div>
            <div className="content">{this.state.content}</div>
            <div className="btn-group">
              <div
                className="btn"
                onClick={() => {
                  this.closePopup();
                }}
              >
                关闭
              </div>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Popup;
