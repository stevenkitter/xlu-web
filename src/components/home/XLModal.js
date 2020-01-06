import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Message } from "semantic-ui-react";
import Clipboard from "clipboard";
import { connect } from "react-redux";
import { closeModal } from "../../redux/actions/index";

class XLModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pwd: ""
    };
  }
  componentDidMount = () => {
    const that = this;
    this.clipboard = new Clipboard("#modal_sure", {
      text: function(trigger) {
        const pwd = that.props.homeMain.modal_pwd;
        return pwd;
      }
    });
    this.clipboard.on("success", function(e) {
      that.setState({
        visible: true
      });
      e.clearSelection();
      setTimeout(() => {
        that.setState({ visible: false });
      }, 2000);
      that.props.closeModal();
    });
    this.clipboard.on("error", function(e) {});
  };
  //   close = () => {};
  componentWillUnmount() {
    if (this.clipboard) {
      this.clipboard.destroy();
    }
  }
  cancelHandle = e => {
    e.preventDefault();
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        {this.state.visible && (
          <Message
            positive
            className="modal-message"
            header="提醒"
            content={"淘宝口令复制成功,打开淘宝即可领取优惠券"}
          />
        )}
        <Modal size="mini" open={this.props.homeMain.modal_open}>
          <Modal.Header>复制您的淘口令</Modal.Header>
          <Modal.Content>
            <input
              className="input"
              type="text"
              value={this.props.homeMain.modal_pwd}
              readOnly
            />
          </Modal.Content>
          <Modal.Actions>
            <a href="/" className="button" onClick={this.cancelHandle}>
              取消
            </a>
            <button href="/" className="button" id="modal_sure">
              确定
            </button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

XLModal.propTypes = {
  pwd: PropTypes.string,
  close: PropTypes.func
};
function mapStateToProps(state) {
  return {
    homeMain: state.home.main
  };
}
export default connect(mapStateToProps, { closeModal })(XLModal);
