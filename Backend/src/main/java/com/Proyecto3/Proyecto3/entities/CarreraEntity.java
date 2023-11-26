package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "carrera")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CarreraEntity {

    @Id
    @Column(unique = true, nullable = false)
    private Long codigo;

    private String nombre;

}
