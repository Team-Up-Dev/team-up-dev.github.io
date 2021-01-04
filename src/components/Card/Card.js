import React, { Component } from "react";
import "./Card.scss";
// import list from "./Profile";

import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";
import Popover from "react-bootstrap/Popover";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

import { getLatestRepo } from "../../functions/getRepositories";
import Repo from "../../functions/getRepositories";
import langAndTheColor from "../../functions/programmingLanguagesAndTheirColor";

// untuk svg buku di card
const BookRepoSVG = () => {
  return (
    <svg
      class="octicon octicon-repo UnderlineNav-octicon hide-sm"
      height="20"
      viewBox="0 0 16 16"
      version="1.1"
      width="20"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
      ></path>
    </svg>
  );
};

// get latestRepository
async function getRepo() {
  return await getLatestRepo();
}

class CreateCards extends Component {
  state = {
    repo: this.props.card,
    langs: null,
    fetchLang: null
  };

  componentDidMount = async () => {
    let repo = new Repo(this.state.repo);

    try {
      // mendapatkan presentase bahasa pemprograman yg ada di repository
      const langs = await repo.getLanguanges();
      this.setState({
        langs: langs,
        fetchLang: true
      });
    } catch (err) {
      console.log(err);
      this.setState({
        fetchLang: true
      });
    }
  };

  createProgressBar = (repo) => {
    return (
      <ProgressBar
        variant={langAndTheColor(repo["lang"])}
        now={repo["value"]}
        data-lang={repo["lang"]}
        key={repo["lang"]}
      />
    );
  };

  renderTooltip = (props) => {
    return (
      <Popover id="button-tooltip" {...props}>
        <Popover.Title as="h3">Popover ww</Popover.Title>
        <Popover.Content>
          And here's some <strong>amazing</strong> content. It's very engaging.
          right?
        </Popover.Content>
      </Popover>
    );
  };

  render() {
    let { repo: card, langs, fetchLang } = this.state;

    return (
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          {card["archived"] === true ? (
            <Alert variant="warning">
              This repository has been archived archived
            </Alert>
          ) : (
            ""
          )}
          <Card.Link
            href={card["html_url"]}
            target="_blank"
            className="cardTitle"
          >
            {BookRepoSVG()} {card.name}
          </Card.Link>
          <Card.Subtitle className="mb-2 mt-1 text-muted">
            {card["language"]}
          </Card.Subtitle>
          <Card.Text>{card["description"]}</Card.Text>

          {langs === null && fetchLang === null ? (
            <Spinner animation="border" />
          ) : langs === null && fetchLang === true ? (
            ""
          ) : (
            <OverlayTrigger
              trigger={["hover", "focus"]}
              placement="auto"
              overlay={this.renderTooltip}
            >
              <ProgressBar className="mb-2">
                {langs.map(this.createProgressBar)}
              </ProgressBar>
            </OverlayTrigger>
          )}

          <Button
            variant="light"
            href={`${card["html_url"]}/stargazers`}
            target="_blank"
            className="btn"
            style={{ marginRight: "2px" }}
          >
            <i className="fas fa-star"></i> {card["stargazers_count"]}
          </Button>

          <Button
            variant="light"
            className="btn"
            href={`${card["html_url"]}/fork`}
            target="_blank"
            style={{ marginLeft: "2px", marginRight: "2px" }}
          >
            <i className="fas fa-code-branch"></i> {card["forks"]}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

class CardList extends Component {
  state = {
    repositories: [],
    fetching: false,
    error: false
  };

  componentDidMount = async () => {
    try {
      // get latestRepo
      let latestRepo = await getRepo();
      console.log("latestRepo", latestRepo);

      if ("status" in latestRepo && latestRepo["status"] !== 200) {
        throw new Error("FAILED TO FETCH!");
      }

      this.setState({ repositories: latestRepo, fetching: true });
    } catch (err) {
      console.log("ERROR!", err);
      this.setState({ fetching: true, error: true });
    }
  };

  render() {
    const { repositories, fetching, error } = this.state;

    let content;

    if (fetching === false) {
      content = <Spinner animation="border" />;
      // console.log("IF")
    } else if (error) {
      content = "Error has occured! Check console to see the details";
    } else {
      // console.log("ELSE")
      content = repositories["data"];
    }

    return (
      <div className="cards-box">
        <div className="cards-box-container" id="cards-list">
          {!error && fetching
            ? content.map((card, index) => {
                return <CreateCards key={index} card={card} />;
              })
            : content}
        </div>
      </div>
    );
  }
}

export default CardList;
