import React from "react";
import Card from "./Card";

const Cards = ({ cards, remove }) => (
    <Table celled padded>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Question</Table.HeaderCell>
                <Table.HeaderCell>Answer</Table.HeaderCell>
                <Table.HeaderCell>Options</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        
        <Table.Body>
            {
                cards.map( card => (
                    <Card key={card.id} {...card} remove={remove} />
                ))
            }
        </Table.Body>
    </Table>
);//const Cards end

export default Cards;