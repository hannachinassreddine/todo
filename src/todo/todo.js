import React, { Component } from 'react'



class todo extends React.Component {
    state = {
      item: "",
      listtodo: [],
    
    };
    addtodo = () => {
      this.setState({listtodo: [...this.state.listtodo, {input:this.state.item,complete:true}],item:''}
        );
       
  
    };
    getinput = e => {
      this.setState({ item: e.target.value});
      
    };
    
    complit = (i) => {
      this.setState({
        listtodo:this.state.listtodo.map((el,z)=>z===i?{input:el.input,complete:!el.complete}:el
  
        )
      });
    };
    
    delete = (x) => {
        this.setState({
          listtodo:this.state.listtodo.filter((el,i) => x!==i)
        })
    }
  
  
    render() {
      return (
        <div>
          <div className="container">
            <h1>To-Do App!</h1>
            <h4>Add new To-Do</h4>
            <input
              type="text"
              placeholder="Enter new task"
              className="add"
              onChange={this.getinput}
              value={this.state.item}
            />{" "}
            <br />
            <input
              type="submit"
              value="Add"
              className="subm"
              id="btnsub"
              onClick={this.addtodo}
            />
          </div>
          <main>
            <div className="container-fluid">
              <h1>Let's get some work done!</h1>
              <hr style={{ width: "80px" }} />
              <div className="row">
                <div className="col-4 " id="demoList">
                  <ul>
                    <li>
                      <span>
                        {this.state.listtodo.map((el, i) => (
                          <div >
                            <button onClick={()=>this.complit(i)}>
                              {el.complete?'complete':'undo'}
                            </button>
                            <button onClick={()=>this.delete(i)}> delete</button>
                            <span className={el.complete?'complete':'undo'}>{el.input}</span>
                          </div>
                        ))}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </main>
        </div>
      );
    }
  }
  export default todo;
