import React, { Component } from 'react';
import './css/form.css';

class Form extends Component {
   render() {
      return (
	    <div className="form">
	       <form>
		  <input name="title" type="text" placeholder="タイトル（必)須）" defaultValue="reactの勉強" /><br />
		  <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！"></textarea><br />
		  <input type="submit" value="todoを作成" />
	       </form>
	    </div>
	 );
   }
}

export default Form;
