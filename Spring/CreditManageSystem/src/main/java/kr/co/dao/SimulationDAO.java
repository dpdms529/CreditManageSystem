package kr.co.dao;

import java.util.List;

import kr.co.vo.SimulationVO;

public interface SimulationDAO {
	//��������
	public List<SimulationVO> criteria(int admissionYear) throws Exception;
}
