import React from "react";
import avatar from "../assets/avatar.png";

export default function Blog() {
  const name = "Zehran";
  const date = "27/12/02";
  const title = "You Must Get a Rival at Least Once in Your Life.";
  return (
    <div className="blog-body container-fluid">
      <div className="row meta-row mt-5">
        <div className="col-1 p-0 d-flex justify-content-center">
          <img src={avatar} className="avatar" alt="" />
        </div>
        <div className="col-2 ps-0 d-flex flex-column justify-content-center">
          <p>Written by {name}</p>
          <p>Created on {date}</p>
        </div>
        <div className="col-2 d-flex justify-content-center align-items-center ms-auto">
          <button className="btn btn-warning me-1 text-light fw-bold">
            Edit
          </button>
          <button className="btn btn-danger text-light fw-bold">Delete</button>
        </div>
      </div>
      <div className="blog-img my-5">
        <img
          src="https://images.unsplash.com/photo-1605205805854-e233096145b8?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="blog">
        <h1>{title}</h1>
        <div className="row">
          <div className="col-8">
            <p className="mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae vel,
              placeat, pariatur ipsum quo voluptatum vero hic autem commodi
              illum cum, eius ratione! Exercitationem laborum at minima non ab
              perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing
              elit. Accusamus unde recusandae sit. Ipsum commodi consequuntur ut
              officia suscipit corrupti blanditiis, vitae similique explicabo id
              iste deleniti placeat possimus atque temporibus? Facilis neque
              veritatis cupiditate quos iste earum, necessitatibus cum
              perspiciatis temporibus eius eaque et, tempora laudantium repellat
              mollitia obcaecati omnis aperiam unde voluptate! Fuga quod officia
              ducimus similique. Culpa, nam. Dolor optio a quia provident
              facilis magni dicta ratione fuga architecto eveniet totam in
              fugit, quis, laudantium hic obcaecati praesentium voluptatibus at,
              itaque fugiat aspernatur. Vel voluptate ad adipisci fugit.
              Temporibus animi repellendus ad omnis ullam eum labore eveniet
              veritatis ipsa tempora molestias impedit asperiores alias sequi
              placeat, perferendis deleniti molestiae? Ipsam ratione magni
              sapiente, suscipit quo consectetur nobis. Vero! Officiis, numquam
              sapiente et, quos fugiat ex enim velit quis sequi voluptate ut
              recusandae quisquam! Modi repellat aspernatur ipsa maxime libero
              odio aperiam eum doloremque, praesentium distinctio dicta illum
              voluptates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
