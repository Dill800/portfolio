export default function(e, { calculations: { onScreen, bottomVisible } }) {
    if (onScreen && bottomVisible)
      this.setState({
        visible: true
      });
  }
  