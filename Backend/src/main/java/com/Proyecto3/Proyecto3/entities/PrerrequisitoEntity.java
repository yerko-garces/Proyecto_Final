package com.Proyecto3.Proyecto3.entities;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "prerrquisito")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class PrerrequisitoEntity {

    @Id
    @Column(unique = true, nullable = false)
    private Long id_pre;

    private Long cod_prerreq;

    @ManyToOne(optional = true)
    private PlanEstudioEntity cod_asig;
}
