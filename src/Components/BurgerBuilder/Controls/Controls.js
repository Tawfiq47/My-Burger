import React from "react";
import { Card, CardHeader, CardFooter, CardBody, Button } from "reactstrap";


const controls = [
    { label: 'Cheese', type: 'cheese' },
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
]

const BuildControl = props => {
    return (
        <div className="d-flex">
            <div className="m-auto ml-5" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{props.label}</div>
            <button className="btn btn-danger btn-sm m-1" onClick={props.removed} >less</button>
            <button className="btn btn-success btn-sm m-1" onClick={props.added}>more</button>
        </div>
    )
}


const Controls = props => {
    return (
        <div className="container text-center mr-md-5">
            <Card style={{ margin: "30px 0", textAlign: "center", width: "400px" }}>
                <CardHeader style={{ background: "#d70f64", color: "#fff" }}><h4>Add ingredients </h4></CardHeader>
                <CardBody>
                    {controls.map(item => {
                        return <BuildControl
                            label={item.label}
                            type={item.type}
                            key={Math.random}
                            added={() => props.ingredientAdded(item.type)}
                            removed={() => props.ingredientRemoved(item.type)}

                        />
                    })}
                </CardBody>
                <CardFooter><h5>Price: BDT</h5></CardFooter>
            </Card>
        </div>
    )
}

export default Controls