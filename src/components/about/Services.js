import './Services.css'
export default function Services() {
  return (
    <div style={{ margin: 10 }}>

      <div className="container-fluid pt-5 pb-5 bg-light">
        <div className="container text-center">

          <div className="row pt-4 gx-4 gy-4">
            <div className="col-md-4 text-center tim">
              <img
                src="https://cdn1-production-images-kly.akamaized.net/Pj5qz2JAM9WgdQmEa5gij40zgHM=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3595870/original/024968200_1633628314-people-working-call-center_23-2148096554.jpg"
                className="rounded-circle mb-3"
              />
              <h4>
                customer service</h4>


            </div>
            <div className="col-md-4 text-center tim">
              <img
                src="https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?w=2000"
                className="rounded-circle mb-3"
              />
              <h4>delivery</h4>


            </div>
            <div className="col-md-4 text-center tim">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbI3GOy-g5Fp-Hqkvn7cl3LM3O-X-WQQ3WvA&usqp=CAU"
                className="rounded-circle mb-3"
              />
              <h4>flower purchase</h4>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
