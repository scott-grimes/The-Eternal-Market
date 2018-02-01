import React, { Component } from 'react'
import PriceFormatting from './gridFormatting/PriceFormatting'
import MarketAPI from '../api/MarketAPI'
//Renders a listing page passed as a property

class ListingCore extends Component {
  constructor(props) {
    super(props);
     this.state = {
                totalPrice : 0.0,
                shippingAddress: 'enter your encrypted shipping address here',
                listing: props.listing
            }  
       this.handleChange = this.handleChange.bind(this);
  }
    
    componentWillMount(){
      let p1 = this.props.listing.price.toNumber()
      let p2 = this.props.orderFee.toNumber()
      const totalPrice = p1+p2
      this.setState({totalPrice: totalPrice});
    }
    
  sendOrder(){
      //cannot access state inside
      console.log(this.state)
    MarketAPI.CreateOrder(this.state.listing.id,this.state.shippingAddress,this.state.totalPrice).then(result=>{
        
        console.log(result);
    })
}
    
handleChange(event) {
    this.setState({shippingAddress: event.target.value});
  }
    
  render() {
      const data = {price:this.state.totalPrice} //our price must be located in a data object for the formatter to work
   
    return(
        <div style={{height: "400px", width: "80%", paddingLeft: "10%"}} className="ag-bootstrap">
        <h2>{this.props.listing.title}</h2>
        <p>{this.props.listing.description}</p>
        <p>Enter your encrypted shipping address into the box below.</p> 
        <p><textarea name="unencryptedShipping" cols="50" rows="5" value={this.state.shippingAddress} onClick={this.sendOrder} onChange={this.handleChange}></textarea></p> 
        <p></p>
        <p><button onClick={this.sendOrder}>Order</button> ~<PriceFormatting data={data} /></p>
        <p>Seller's Public Key</p> 
        <p><textarea name="unencryptedShipping" cols="50" rows="5" readOnly></textarea></p> 
        </div>
  
    )
  }
}



export default ListingCore;  