import React from "react";
import { Button, Table } from "semantic-ui-react";

const Card = ({ id, remove }) => (
    <Table.Row id={card.id}>
        <Table.Cell>{card.question}</Table.Cell>
        <Table.Cell>{card.answer}</Table.Cell>
        <Table.Cell>
            <Button color="blue" onClick={() => remove(id)}>
                Delete
            </Button>
        </Table.Cell>
    </Table.Row>
);

export default Card;