import React from "react";
import PropTypes from "prop-types";

class AddNews extends React.Component {
  state = {
    inputValue: "",
    textAreaValue: "",
    bigTextAreaValue: "",
    ruleAgree: false,
  };

  validateStateForm = () => {
    const { inputValue, textAreaValue, bigTextAreaValue, ruleAgree } =
      this.state;

    if (
      inputValue.trim() &&
      textAreaValue.trim() &&
      bigTextAreaValue.trim() &&
      ruleAgree
    ) {
      return true;
    }
    return false;
  };

  onInputChange = (e) => {
    const { id, value } = e.currentTarget;
    this.setState({ [id]: value });
  };
  onClickRuleAgree = () => {
    this.setState({ ruleAgree: !this.state.ruleAgree });
  };

  onAddButton = (e) => {
    e.preventDefault();
    const { inputValue, textAreaValue, bigTextAreaValue } = this.state;
    this.props.onAddNewsButton({
      id: +new Date(),
      author: inputValue,
      text: textAreaValue,
      bigText: bigTextAreaValue,
    });
  };

  render() {
    const { inputValue, textAreaValue, bigTextAreaValue } = this.state;

    return (
      <form className="add">
        <input
          id="inputValue"
          onChange={this.onInputChange}
          type="text"
          className="add__author"
          placeholder="Ваше имя"
          value={inputValue}
        />
        <textarea
          id="textAreaValue"
          onChange={this.onInputChange}
          className="add__text"
          placeholder="Текст новости краткий"
          value={textAreaValue}
        ></textarea>
        <textarea
          id="bigTextAreaValue"
          onChange={this.onInputChange}
          className="add__text"
          placeholder="Полный текст новости"
          value={bigTextAreaValue}
        ></textarea>
        <label className="add__checkrule">
          <input onClick={this.onClickRuleAgree} type="checkbox" />Я согласен с
          правилами
        </label>
        <button
          className="add__btn"
          disabled={!this.validateStateForm()}
          onClick={this.onAddButton}
        >
          Добавить новость
        </button>
      </form>
    );
  }
}

AddNews.propTypes = {
  onAddNewsButton: PropTypes.func.isRequired,
};

export default AddNews;
