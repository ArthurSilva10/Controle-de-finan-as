package com.Arthur.FinancasApi.Entradas;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class EntradaController
{
    @Autowired
    private EntradaService entradaService;

    @GetMapping("entradas/get")
    public Iterable<Entrada> listar()
    {
        return entradaService.listar();
    }

    @PostMapping("entradas/post")
    public ResponseEntity<Entrada> cadastrar(@RequestBody Entrada entrada)
    {
        return entradaService.cadastrar(entrada);
    }
}
