package com.aviation.poc.settings.repository;

import java.io.Serializable;
import java.util.Date;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.aviation.poc.settings.entity.Filter;

public interface FilterRepository extends JpaRepository<Filter, Serializable> {

	@Query("SELECT  filter as filter FROM Filter filter where filter.filterID=:filterID")
	public Filter findOne(Long filterID);


	@Query("SELECT  filter as filter FROM Filter filter where filter.defaultFilter=1")
	public Filter getDefaultFilter();

	@Query("SELECT   max(filter.filterID) as maxval  FROM Filter filter")
	public Long loadRecentSavedFilter();
	
	
	@Modifying
	@Transactional
	@Query("UPDATE Filter f SET f.fromDate=?1, f.toDate=?2, f.selectedFleets=?3, f.selectedSubfleets=?4, f.selectedTails=?5,f.selectedCPNs=?6, f.selectedMFGs=?7, f.selectedATAs=?8 WHERE f.filterName=?9")
	public int updateFilter( Date fromDate,Date toDate,String selectedFleets,
			 String selectedSubFleets,String selectedTails,String selectedCPNs,
			 String selectedMFGs,String selectedATAs,String filterName);
	
	
	/* update filter by*/
	@Modifying
	@Transactional
	@Query("UPDATE FilterBy fb SET fb.installedUnit=?1, fb.newUnit=?2, fb.removedUnit=?3 WHERE fb.filterID=?4")
	public int updateFilterBy(boolean isInstalled,boolean isNew,boolean isRemoved , long filterID);
	

}
