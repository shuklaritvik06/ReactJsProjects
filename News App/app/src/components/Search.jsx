import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className='w-2/4 mt-6 dark:shadow-sm dark:shadow-white rounded-md'>
            <input type="text" placeholder="Search..." className='w-full outline-none border p-3 rounded-md' />
        </div>
      </div>
    )
  }
}


