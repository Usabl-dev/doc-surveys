import React from 'react';

interface UsablSurveyProps {
    options: string[];
    answer: string;
    buttonStyle: React.CSSProperties;
    containerStyle: React.CSSProperties;
}
declare const UsablSurvey: ({ options, buttonStyle, answer, containerStyle, }: UsablSurveyProps) => JSX.Element;

export { UsablSurvey };
