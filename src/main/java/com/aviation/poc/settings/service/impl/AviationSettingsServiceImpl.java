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
		return filterRepository.findAll();
	}
	
	public int updateFilter(Filter filter) {
		long defaultFilterId;
		//system.out.println("Update Filter "+filter.getFilterID());
		
		defaultFilterId=filterRepository.getDefaultFilter().getFilterID();
		System.out.println("default id :"+defaultFilterId);
		System.out.println("fetch id :"+filter.getFilterID());
		filter.setDefaultFilter(true);
		filterRepository.updateDefaultFilter(defaultFilterId);
		filterRepository.updateFilter(filter.getFromDate(),filter.getToDate(),filter.getSelectedFleets(),filter.getSelectedSubfleets(),
				filter.getSelectedTails(),filter.getSelectedCPNs(),filter.getSelectedMFGs(),filter.getSelectedATAs(), filter.getFilterName());
   //system.out.println("Update Filter "+filter.getFilterID());
		filterRepository.updateDefaultFilterToOne(filter.getFilterID());
		return filterRepository.updateFilterBy(filter.getFilterBy().isInstalledUnit(),filter.getFilterBy().isNewUnit(),filter.getFilterBy().isRemovedUnit(),filter.getFilterID());
		
		
	}
	@Transactional(isolation = Isolation.READ_COMMITTED, propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
	public void saveFilter(Filter filter) {
		long defaultFilterId=0;
		System.out.println("In side service save method");
		System.out.println(filter.toString());
		filter.setDefaultFilter(true);
		defaultFilterId=filterRepository.getDefaultFilter().getFilterID();
		System.out.println("default id :"+defaultFilterId);
		filterRepository.updateDefaultFilter(defaultFilterId);
		System.out.println("after update the default filter");
		filterRepository.save(filter);
		
	}

	
}
