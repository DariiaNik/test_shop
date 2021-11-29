import React from "react";
import './Attributes.css'
import AttributeItem from "./AttributeItem";


// const Attributes = (props) =>{
//     let attributeElement = props.attribute.items.map(item => (
//         <AttributeItem item={item} key={item.id} type={props.type}/>
//     ))
//     return(
//         <div className="description_attributes attributes">
//             <div className="attributes_title">{props.attribute.name} :</div>
//             <div className="attributes_list">
//                 {attributeElement}
//             </div>
//         </div>
//     )
// }


class Attributes extends React.Component {

    state = {
        selected: undefined,
    }


    render() {
        let setAttribute = (id) => {
            this.setState({
                    selected: id
                }
            )
        }

        let attributeElement = this.props.attribute.items.map(item => (
            <AttributeItem item={item} key={item.id} type={this.props.type} selected={this.state.selected === item.id}
                           setAttribute={setAttribute}/>
        ))


        return (
            <div className="description_attributes attributes">
                <div className="attributes_title">{this.props.attribute.name} :</div>
                <div className="attributes_list ">
                    {attributeElement}
                </div>
            </div>
        )
    }
}

export default Attributes;