package com.aviation.poc.settings.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.aviation.poc.settings.entity.Filter;
import com.aviation.poc.settings.repository.FilterRepository;
import com.aviation.poc.settings.service.AviationSettingsService;

@Service
public class AviationSettingsServiceImpl implements AviationSettingsService {

	@Autowired
	private FilterRepository filterRepository;
	
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public List<Filter> getFilters() {
		return filterRepository.getFilters();
	}

	
}
