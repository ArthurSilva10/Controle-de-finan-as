package com.Arthur.FinancasApi.Saidas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class SaidasController
{
    @Autowired
    private SaidasServices services;

    @GetMapping("saidas/get")
    public Iterable<Saida> listar()
    {
        return services.listar();
    }

    @PostMapping("saidas/post")
    public ResponseEntity<Saida> cadastrar(@RequestBody Saida saida)
    {
        return services.cadastrar(saida);
    }

    @DeleteMapping("saidas/{id}")
    public ResponseEntity<Saida> apagar(@PathVariable long id)
    {
        return services.deleta(id);
    }
}
