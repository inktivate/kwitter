import React from 'react';
import '../App.css';
import { Feed, Icon } from 'semantic-ui-react'

class ListItem extends React.Component {

  formatDate = (date) => {
    var monthNames = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var day = date.substring(8, 10);
    var monthIndex = parseInt(date.substring(5, 7), 10);
    var year = date.substring(0, 4);
    var time = "";
    if (date.substring(11, 13) > 12) {
      time = (date.substring(11, 13) - 12) + date.substring(13, 16) + " PM";
    } else {
      time = date.substring(11, 16) + " AM";
    }

    return day + ' ' + monthNames[monthIndex] + ' ' + year + ' at ' + time;
  }

  render() {
    return (
      <React.Fragment>

        <div className="ui feed segment">
          <div className="event">
            <div className="label">
              <img src="http://aspiretechsoft.com/assets/images/testimonials/user-default.png" />
            </div>
            <div className="content">
              <div className="date">
              {this.formatDate(this.props.date)}
            </div>
              <div className="summary">
                <a>User:{this.props.userId}</a>
            </div>
              <div className="extra text">
              {this.props.text}
            </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ListItem;
