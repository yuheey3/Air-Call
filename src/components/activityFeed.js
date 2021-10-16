import React, { Component } from 'react';

class ActivityFeed extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('https://aircall-job.herokuapp.com/activities')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {

        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div className="activity">

                    {items.map(item => (
                        <ul key={item.id}>
                            <br />
                           <li>{new Date(item.created_at).toLocaleDateString()}</li>
                           <li>{new Date(item.created_at).toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: true})}</li>
                           <li>{item.from} </li>
                           <li>tried to call on{item.via}</li>
                        </ul>
                    ))};
            </div>
        )
    }
}

export default ActivityFeed;