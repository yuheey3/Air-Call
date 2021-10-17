import React, { Component } from 'react';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: {},
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch(`https://aircall-job.herokuapp.com/activities/${this.props.id}`)
            .then(res => res.json())
            .then(json => {

                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {


        //declare item
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div>Loading...</div>
        }

        return (
            <div className="detail">
              {this.state.items.from}
                tried to call on {this.state.items.via}<br />
                {new Date(this.state.items.created_at).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}<br />
                 To: {this.state.items.to}<br />
                 Duration: {this.state.items.duration}<br />
                Call type: {this.state.items.calltype}<br />
            </div>

        )

    }
}

export default Detail;