import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "semantic-ui-react";
import Clipboard from "clipboard";

class XLModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: ""
    };
  }
  componentDidMount = () => {
    const button = this.button;
    const pwd = this.props.pwd;
    this.clipboard = new Clipboard(button, {
      text: function(trigger) {
        return pwd;
      }
    });
    this.clipboard.on("success", function(e) {
      alert("复制成功,打开淘宝即可");
      e.clearSelection();
    });
    this.clipboard.on("error", function(e) {});
  };
  //   close = () => {};
  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }
  render() {
    return (
      <Modal size="mini" open={this.props.open} onClose={this.props.close}>
        <Modal.Header>复制您的淘口令</Modal.Header>
        <Modal.Content>
          <input
            className="input"
            type="text"
            value={this.props.pwd}
            readOnly
          />
        </Modal.Content>
        <Modal.Actions>
          <a href="/" className="button">
            取消
          </a>
          <a
            href="/"
            className="button"
            ref={element => {
              this.button = element;
            }}
          >
            确定
          </a>
        </Modal.Actions>
      </Modal>
    );
  }
}

XLModal.propTypes = {
  open: PropTypes.bool,
  pwd: PropTypes.string,
  close: PropTypes.func
};

export default XLModal;
