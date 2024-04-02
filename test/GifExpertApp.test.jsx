import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 
    test('should first', () => { 
        
     })
    // setup function: para no repetir el setup de las pruebas repetidas veces
  /* const setup = () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form", { name: "categories-form" });
    return {
      input,
      form,
    };
  };
 
  test("Should have GifExpertApp in h1", () => {
    setup();
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toBe(
      "GifExpertApp"
    );
  });
 
  test("Should add category if it's not repeated", () => {
    // Mi app tiene como state inicial de las categorias "Demon Slayer".
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "Saitama" } });
    fireEvent.submit(form);
 
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });
 
  test("Should NOT add category if it's repeated", () => {
    // Mi app tiene como state inicial de las categorias "Demon Slayer".
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: "Demon Slayer" } });
    fireEvent.submit(form);
 
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(1);
  }); */
 })