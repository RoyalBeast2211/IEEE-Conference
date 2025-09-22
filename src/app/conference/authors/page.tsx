import React from "react";

export default function AuthorsPage() {
  return (
    <>
      <h2>Author Information</h2>
      <p>
        Welcome to the author information hub for IEEE SeFet 2026. Here you'll
        find everything you need to submit and prepare your research papers for
        our conference.
      </p>

      <h3>Important Dates</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <strong>Paper Submission Deadline:</strong>
            </td>
            <td>March 15, 2026</td>
          </tr>
          <tr>
            <td>
              <strong>Notification of Acceptance:</strong>
            </td>
            <td>May 1, 2026</td>
          </tr>
          <tr>
            <td>
              <strong>Camera Ready Deadline:</strong>
            </td>
            <td>June 1, 2026</td>
          </tr>
        </tbody>
      </table>

      <h3>Submission Guidelines</h3>
      <p>
        All submissions must follow IEEE formatting guidelines and be submitted
        through the conference management system. Papers should be original,
        unpublished work relevant to sustainable energy and electric
        transportation.
      </p>

      <h3>Quick Links</h3>
      <ul>
        <li>
          <a href="/conference/authors/call-for-papers">Call for Papers</a>
        </li>
        <li>
          <a href="/conference/authors/guidelines">Submission Guidelines</a>
        </li>
        <li>
          <a href="/conference/authors/publication-templates">
            Publication Templates
          </a>
        </li>
        <li>
          <a href="/conference/authors/camera-ready">
            Camera Ready Instructions
          </a>
        </li>
      </ul>
    </>
  );
}
