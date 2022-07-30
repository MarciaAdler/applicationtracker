import React from "react";
import { ListGroup } from "react-bootstrap";
export default function Resources() {
  return (
    <div className="resources-container">
      {" "}
      <h2 className="mt-2 text-center">Resources</h2>
      <h6>For all Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://Wonsulting.com" target="_blank" rel="noreferrer">
            Wonsulting.com
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.linkedin.com/in/jonathan-wonsulting/"
            target="_blank"
            rel="noreferrer"
          >
            Jonathan Javier on LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.indeed.com/" target="_blank" rel="noreferrer">
            Indeed
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.glassdoor.com/index.htm"
            target="_blank"
            rel="noreferrer"
          >
            Glassdoor
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://jobs.all-hands.us/" target="_blank" rel="noreferrer">
            All Hands Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.themuse.com/" target="_blank" rel="noreferrer">
            The Muse
          </a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">For Women Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a href="https://fairygodboss.com/" target="_blank" rel="noreferrer">
            Fairy God Boss
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.hiretechladies.com/"
            target="_blank"
            rel="noreferrer"
          >
            Tech Ladies
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://powertofly.com/" target="_blank" rel="noreferrer">
            PowerToFly
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.womenwhocode.com/"
            target="_blank"
            rel="noreferrer"
          >
            Women Who Code
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://remotewoman.com/" target="_blank" rel="noreferrer">
            RemoteWoman.com
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://jobs.girlboss.com/" target="_blank" rel="noreferrer">
            Girlboss Job Board
          </a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">Tech Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a href="https://builtin.com/" target="_blank" rel="noreferrer">
            BuiltIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://angel.co/jobs" target="_blank" rel="noreferrer">
            AngelList
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.diversifytech.co/job-board"
            target="_blank"
            rel="noreferrer"
          >
            Diversify Tech Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.nyctechslack.com/"
            target="_blank"
            rel="noreferrer"
          >
            NYC Tech Slack Group
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.tribaja.co/" target="_blank" rel="noreferrer">
            Tribaja
          </a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">Remote Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a
            href="https://www.remotelyfirst.com/"
            target="_blank"
            rel="noreferrer"
          >
            Remotely First Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://remotists.com/" target="_blank" rel="noreferrer">
            Remotists Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://weworkremotely.com/"
            target="_blank"
            rel="noreferrer"
          >
            We Work Remotely
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://remotepoc.com/" target="_blank" rel="noreferrer">
            RemotePOC.com: Best Jobs for remote professionals of Color
          </a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">Startups</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a
            href="https://ycombinator.getro.com/"
            target="_blank"
            rel="noreferrer"
          >
            Y Combinator Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://jobs.revolution.com/"
            target="_blank"
            rel="noreferrer"
          >
            Revolution Job Board
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a
            href="https://www.venwise.com/talent-2/"
            target="_blank"
            rel="noreferrer"
          >
            Venwise
          </a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
