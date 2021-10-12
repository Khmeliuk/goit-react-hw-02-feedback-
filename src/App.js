import { Component } from "react";
import Statistics from "./components/statistic/Statistics";
import Section from "./components/section/Section";

import FeedbackOptions from "./components/feedbackOptions/FeedbackOptions";

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }
  title = {
    feedback: "Please leave feedback",
    statistic: "Statistic",
  };

  onLeafFeedback = (e) => {
    const name = e.currentTarget.name.toLowerCase();
    this.setState((pervState) => {
      return {
        [name]: pervState[name] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title={this.title.feedback}>
          <FeedbackOptions
            options={["Good", "Neutral", "Bad"]}
            onLeaveFeedback={this.onLeafFeedback}
          />
          <Section title={this.title.statistic}>
            {total ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={total}
                positive={positive}
              />
            ) : (
              <p>No feedback given</p>
            )}
          </Section>
        </Section>
      </div>
    );
  }
}
export default App;
