package com.aviation.poc.settings.repository;

import java.io.Serializable;

import org.springframework.data.repository.CrudRepository;

import com.aviation.poc.settings.entity.FilterBy;


public interface FilterByRepository extends CrudRepository<FilterBy, Serializable> {

}
