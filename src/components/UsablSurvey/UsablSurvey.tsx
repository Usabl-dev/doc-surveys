import React, { useState } from "react";

export interface UsablSurveyProps {
  options: string[];
  answer: string;
  buttonStyle: React.CSSProperties;
  containerStyle: React.CSSProperties;
}

const UsablSurvey = ({
  options,
  buttonStyle,
  answer,
  containerStyle,
}: UsablSurveyProps) => {
  const [state, setState] = useState("");

  return (
    <div style={{ padding: "1rem", ...containerStyle }}>
      {state ? (
        <p>
          {state === answer
            ? `Correct! The answer is "${answer}"`
            : `Incorrect! You chose "${state}" but the answer is "${answer}"`}
        </p>
      ) : (
        options.map((option, index) => (
          <div
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            key={option + "-" + index}
            onClick={() => setState(option)}
          >
            <div
              style={{
                height: "1rem",
                width: "1rem",
                borderRadius: "0.5rem",
                marginRight: "0.5rem",
                border: "3px solid black",
                ...buttonStyle,
              }}
            />
            <p>{option}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UsablSurvey;
