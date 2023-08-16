import "./styles.css";

import {
  Container,
  Grid,
  Segment,
  Header,
  Statistic,
  Icon,
  Form,
  Button
} from "semantic-ui-react";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href =
  "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

export default function App() {
  return (
    <Container>
      <Header as="h1"> Budject</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance</Statistic.Label>
        <Statistic.Value>235,678</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Statistic size="small">
                <Statistic.Label size="tiny" color="green">
                  Income
                </Statistic.Label>
                <Statistic.Value>235,678</Statistic.Value>
              </Statistic>
            </Grid.Column>
            <Grid.Column>
              <Statistic size="small">
                <Statistic.Label size="tiny">Expensis</Statistic.Label>
                <Statistic.Value color="green">235,678</Statistic.Value>
              </Statistic>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History </Header>
      <Segment color="red">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Something </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              70 Rs{" "}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Icon name="edit" enabled bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment color="green">
        <Grid columns={3}>
          <Grid.Row>
            <Grid.Column width={10}>Something </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              70 Rs{" "}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              <Icon name="edit" enabled bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Header as="h3">Add New Transection </Header>
      <Form unstackable>
        <Form.Group>
          <Form.Input
            width={12}
            placeholder="New shining things"
            icon="tag"
            label="discription"
          />
          <Form.Input
            width={3}
            placeholder="New shining things"
            icon="doller"
            label="value"
          />
        </Form.Group>
        <Button.Group>
          <Button> Cancel </Button>
          <Button.Or />
          <Button primary> Ok </Button>
        </Button.Group>
      </Form>
    </Container>
  );
}
