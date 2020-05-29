import React from "react";
import { useI18n } from "../features/i18n";

import profile from "./profile.json";
import "./profile.css";

export default function Profile() {
  const i18n = useI18n();
  const user = profile.userAccountInfo;

  return (
    <div className="flex profile">
      <div className="left">
        <div className="item">Email {user.email}</div>

        <div className="item">Full name: {user.fullName}</div>

        <div className="teams">
          <ul>
            {user.teams.map(team => (
              <li key={team.id}>{team.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right">Recent likes</div>
    </div>
  );
}
