import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-lg-8 col-xl-6 mx-auto">
                <div className="p-4 p-sm-5 bg-primary bg-opacity-10 rounded">
                  <h2>Faça login da sua conta</h2>
                  <form className="mt-4">
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="exampleInputEmail1"
                      >
                        Usuario
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="E-mail"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        className="form-label"
                        htmlFor="exampleInputPassword1"
                      >
                        Senha
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="*********"
                      />
                    </div>
                    <div className="mb-3 form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleCheck1"
                      >
                        mantenha-me conectado
                      </label>
                    </div>
                    <div className="row align-items-center">
                      <div className="col-sm-4">
                        <button type="submit" className="btn btn-success">
                          <Link href="/dashboard/Autores/list">Entrar</Link>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
