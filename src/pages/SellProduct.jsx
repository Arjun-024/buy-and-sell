import React from "react";

function SellProduct() {
  const title = React.useRef();
  const desc = React.useRef();
  const price = React.useRef();
  const img = React.useRef();
  const place = React.useRef();
  const name = React.useRef();
  const contact = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validations 
    if (title.current.value.length < 10 || title.current.value.length > 150) {
      alert('Title should be between 10 and 150 characters')
      return; 
    }

    if (desc.current.value.length < 20 || desc.current.value.length > 1000) {
      alert('Description should be between 20 and 1000 characters')
      return;
    }

    if (price.current.value <= 0) {
      alert('Price should be greater than 0')
      return;
    }

    if (place.current.value.length < 3 || place.current.value.length > 100) {
      alert('Place should be between 3 and 100 characters')
      return;
    }

    if (name.current.value.length < 2 || place.current.value.length > 50) {
      alert('Place should be between 2 and 50 characters')
      return;
    }

    if (contact.current.value > 10000000000000) {
      alert('Please enter a valid number')
    }

    const reqObj = {
      authorContact: contact.current.value,
      authorName: name.current.value,
      itemDate: new Date().toLocaleDateString(),
      itemDesc: desc.current.value,
      itemImg: img.current.value,
      itemPlace: place.current.value,
      itemPrice: price.current.value,
      itemTitle: title.current.value
    }


    // make api call
    const response = fetch('https://buy-and-sell-f5fe8-default-rtdb.asia-southeast1.firebasedatabase.app/item-list.json', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                authorContact: contact.current.value,
                authorName: name.current.value,
                itemDate: new Date().toLocaleDateString(),
                itemDesc: desc.current.value,
                itemImg: img.current.value,
                itemPlace: place.current.value,
                itemPrice: price.current.value,
                itemTitle: title.current.value
            }),
        })
        .then (res => alert('Item submitted for Ad'))


    // reset the form
    title.current.value = '';
    desc.current.value = '';
    price.current.value ='';
    place.current.value = '';
    name.current.value = '';
    contact.current.value = '';
    img.current.value = '';

  }


  return (
    <div className="sell-product-container">
      <form onSubmit={handleSubmit} className="sell-product-form">
        <input type="text" placeholder="Title" ref={title} required/>
        <input type="text" placeholder="Description" ref={desc} required/>
        <input type="number" placeholder="Price" ref={price} required/>
        <input type="text" placeholder="Product Image Link" ref={img} required/>
        <input type="text" placeholder="Place" ref={place} required/>
        <input type="text" placeholder="Full Name" ref={name} required/>
        <input type="number" placeholder="Phone Number" ref={contact} required/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default SellProduct;
