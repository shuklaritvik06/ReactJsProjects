import React, { Component } from "react";
export default class NewsCard extends Component {
  render() {
    return (
      <>
        <div className="mt-5">
          <div className="w-[300px] border border-slate-400 rounded-md bg-slate-50">
            <img
              src={this.props.image ? this.props.image : "https://via.placeholder.com/150"}
              alt=""
              className="w-full h-48 rounded-md"
            />
            <p className="text-slate p-3 font-bold">{this.props.title}</p>
            <p className="p-3">{this.props?.description?.substring(0,100)}</p>
            <div className="grid grid-cols-2 gap-2 p-3">
            <p className="mr-2 border border-blue-500 p-2 rounded-md bg-blue-200">{this.props.source===""?"Not Known": this.props.source}</p>
            {this.props.author && <p className="mr-3 border border-red-500 p-2 rounded-md bg-red-200">{this.props?.author?.substring(0,20)}</p>}
          </div>
          </div>
        </div>
      </>
    );
  }
}
