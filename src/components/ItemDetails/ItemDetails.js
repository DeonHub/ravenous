import React from 'react';
import Yelp from '../../util/Yelp';

class ItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemDetails: null, // Initialize as null
    };
  }

  componentDidMount() {
    // Access the ID or alias from the URL parameter
    const { alias } = this.props.match.params;

    // Use the ID or alias to make an API call to fetch item details
    Yelp.getItemDetails(alias).then((response) => {
      this.setState({ itemDetails: response }); // Update state with fetched data
    });
  }

  render() {
    if (this.state.itemDetails) {
      // Render item details when data is available
      const { name, description, imageUrl, rating } = this.state.itemDetails;

      return (
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
          <img src={imageUrl} alt={name} />
          <p>Rating: {rating}</p>
        </div>
      );
    } else {
      // Render a loading message or component while waiting for data
      return <div>Loading...</div>;
    }
  }
}

export default ItemDetails;
