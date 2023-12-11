package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "carrera")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarreraEntity {

    @Id
    @Column(unique = true, nullable = false)
    private Long cod_carr;

    private String nombre;

}
