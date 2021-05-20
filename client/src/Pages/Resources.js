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
          <a href="https://Wonsulting.com">Wonsulting.com</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.linkedin.com/in/jonathan-wonsulting/">
            Jonathan Javier on LinkedIn
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.indeed.com/">Indeed</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.glassdoor.com/index.htm">Glassdoor</a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">For Women Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a href="https://fairygodboss.com/community/feed">Fairy God Boss</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://www.hiretechladies.com/">Tech Ladies</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://powertofly.com/">PowerToFly</a>
        </ListGroup.Item>
      </ListGroup>
      <h6 className="mt-2">Tech Job Seekers</h6>
      <ListGroup className="resources-listgroup">
        <ListGroup.Item>
          <a href="https://builtin.com/">BuiltIn</a>
        </ListGroup.Item>
        <ListGroup.Item>
          <a href="https://angel.co/jobs">AngelList</a>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
